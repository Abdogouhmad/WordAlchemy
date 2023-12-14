import { fail } from '@sveltejs/kit';
import { db } from '$lib/db.js';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

export const actions = {
	register: async ({ request }) => {
		// TODO register the user
		const formData = await request.formData();
		const email = formData.get('email');
		const username = formData.get('username');
		const password = formData.get('password');
		const confirmpassword = formData.get('confirm password');

		// check the password and input
		if (password !== confirmpassword) {
			console.log('password do not match');
			return fail(400, {
				message: 'password do not match'
			});
		} else if (
			typeof email !== 'string' ||
			typeof username !== 'string' ||
			typeof password !== 'string' ||
			!email ||
			!password
		) {
			console.log('invalide format');
			return fail(400, {
				invalideFormat: true
			});
		}

		// check if the email already exist
		const user = await db.user.findUnique({
			where: {
				email
			}
		});

		if (user) {
			return fail(400, {
				emailTaken: true
			});
		}

		// hash the password
		const hashedPassword = await bcrypt.hash(password, 10);
		// crypt the session
		const cryptedSession = crypto.randomUUID();

		// create the user

		const newUser = await db.user.create({
			data: {
				email,
				username,
				password: hashedPassword,
				session: cryptedSession
			}
		});
	}
};

// TODO: Add validation for the form if the user exists or not
