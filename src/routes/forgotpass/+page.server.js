import { fail } from '@sveltejs/kit';
import { prisma } from '../../lib/server/prisma';
import crypto from 'crypto';
import { sendResetPasswordEmail } from '../../lib/server/auth/utils';

export async function load() {
	//todo
}

export const actions = {
	resetpassword: async ({ request }) => {
		// todo

		const data = await request.formData();

		const email = data.get('email');

		if (typeof email !== 'string' || !email) {
			return fail(400, { invalidFormat: true });
		}

		const user = await prisma.user.findUnique({
			where: { email }
		});

		if (!user?.verified) {
			return fail(400, { notVerified: true });
		}

		if (!user) {
			return fail(400, { credentials: true });
		}

		const resetPasswordToken = crypto.randomBytes(16).toString('hex');

		await prisma.user.update({
			where: { email },
			data: {
				resetPasswordToken
			}
		});

		await sendResetPasswordEmail(email, resetPasswordToken);

		return fail(200, { emailSent: true });
	}
};
