// if valid token set token to null redirect to success
// else redirect to fail

import { fail, redirect } from '@sveltejs/kit';
import { prisma } from '../../../lib/server/prisma';
import bcrypt from 'bcrypt';

export const load = async ({ params }) => {
	const token = params.resetPassToken;

	console.log('resetPasswordToken -----', token);

	// Verify the token against the database
	const user = await prisma.user.findUnique({
		where: { resetPasswordToken: String(token) }
	});

	if (!user) {
		throw redirect(303, '/forgotpass/error');
	}

	return { validToken: true };
};

export const actions = {
	setNewPassword: async ({ request, params }) => {
		const token = params.resetPassToken;

		console.log('token token token -----', token);

		const data = await request.formData();

		const password = data.get('password');
		const confirmPassword = data.get('confirm-password');

		if (password !== confirmPassword) {
			return fail(400, { identicalPasswords: true });
		}

		if (typeof password !== 'string' || !password) {
			return fail(400, { invalidFormat: true });
		}

		await prisma.user.update({
			where: { resetPasswordToken: String(token) },
			data: { password: await bcrypt.hash(password, 10) }
		});

		return { success: true };
	}
};
