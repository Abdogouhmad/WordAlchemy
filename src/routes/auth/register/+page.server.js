import { fail } from '@sveltejs/kit';
import { db } from '$lib/db.js';
import { ConfirmEmail } from '$lib/sendemail.js';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

/**
 * Registers a new user.
 *
 * @param {object} request - The request object.
 * @returns {object} - The response object.
 */
export const actions = {
	register: async ({ request }) => {
		const formData = await request.formData();
		const fullname = formData.get('fullname');
		const email = formData.get('email');
		const username = formData.get('username');
		const password = formData.get('password');
		const confirmpassword = formData.get('confirm password');

		// check the password and input
		if (password !== confirmpassword) {
			console.log('password do not match');
			return fail(400, {
				PassNotMatch: 'password do not match'
			});
		}
		// check if the password is too short
		if (password.length < 8) {
			return fail(400, {
				passwordTooShort: 'password must be at least 8 characters'
			});
		}
		// check if the username has odd characters
		if (!username.match(/^[a-z0-9]+$/gim)) {
			return fail(400, {
				invalidUsername:
					'Username has invalid characters. Please use only small letters and numbers.'
			});
		}

		// check if the password is valid format
		if (
			typeof fullname !== 'string' ||
			typeof email !== 'string' ||
			typeof username !== 'string' ||
			typeof password !== 'string' ||
			typeof confirmpassword !== 'string' ||
			!fullname ||
			!username ||
			!confirmpassword ||
			!email ||
			!password
		) {
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
		const verificationToken = crypto.randomBytes(16).toString('hex');

		await db.user.create({
			data: {
				fullname,
				email,
				username,
				password: hashedPassword,
				session: cryptedSession,
				verificationToken
			}
		});

		// send email
		const sendemail = await ConfirmEmail(email, username, verificationToken);

		// check email if it is sent
		if (sendemail) {
			return {
				emailSent: true
			};
		} else {
			return fail(400, {
				emailNotSent: true
			});
		}
	}
};
