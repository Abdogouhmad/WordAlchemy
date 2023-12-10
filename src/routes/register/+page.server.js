// Import necessary modules
import { fail, redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

// Import your Prisma client
import { prisma } from '../../lib/server/prisma';
import { sendConfirmationEmail } from '../../lib/server/auth/utils';

// Define user roles
const Roles = {
	ADMIN: 'ADMIN',
	USER: 'USER'
};

export const actions = {
	register: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email'); // Assuming 'email' is the email
		const password = data.get('password');
		const connfirmPassword = data.get('confirm-password');

		if (password !== connfirmPassword) {
			return fail(400, { identicalPasswords: true });
		}

		if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
			return fail(400, { invalidFormat: true });
		}

		const user = await prisma.user.findUnique({
			where: { email }
		});

		if (user) {
			return fail(400, { emailTaken: true });
		}

		const verificationToken = crypto.randomBytes(16).toString('hex');

		const newUser = await prisma.user.create({
			data: {
				email,
				password: await bcrypt.hash(password, 10),
				session: crypto.randomUUID(),
				role: { connect: { name: Roles.USER } },

				verificationToken
			}
		});

		// Send a confirmation email to the user
		await sendConfirmationEmail(email, verificationToken);

		throw redirect(303, '/');
	}
};
