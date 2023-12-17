import { fail, redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';

import { db } from '$lib/db.js';

export const actions = {
	/*
	 * Login function that handles user authentication and session management.
	 *
	 * Parameters:
	 *   - cookies: the cookies object used to set the session cookie
	 *   - request: the request object containing user data
	 *
	 * Returns:
	 *   - Throws a redirect error to '/profile' if the login is successful
	 *   - Throws an error with a status code and error message if the login fails
	 */
	login: async ({ cookies, request }) => {
		// Get form data from the request
		const data = await request.formData();

		// Extract the login user and password from the form data
		const LoginUser = data.get('credentials');
		const password = data.get('password');

		// Check if the login user and password are valid
		if (typeof LoginUser !== 'string' || typeof password !== 'string' || !LoginUser || !password) {
			// Return a 400 error with invalid format message
			return fail(400, { invalidFormat: true });
		}

		// Find the user in the database by email or username
		const user = await db.user.findFirst({
			where: {
				OR: [{ email: LoginUser }, { username: LoginUser }]
			}
		});

		// Check if the user exists
		if (!user) {
			return fail(400, { credentials: true });
		}

		// Compare the password with the user's password in the database
		const userPassword = await bcrypt.compare(password, user.password);

		// Check if the password is correct
		if (!userPassword) {
			return fail(400, { credentials: true });
		}

		// Generate a new session ID
		const session = crypto.randomUUID();

		// Update the user's session in the database
		const Auth = await db.user.update({
			where: { email: user.email },
			data: { session }
		});
		console.log('Your session --->', Auth.session);

		// Log the session ID
		cookies.set('session', session, {
			// send cookie for every page
			path: '/',
			// server side only cookie so you can't use `document.cookie`
			httpOnly: true,
			// only requests from same site can send cookies
			sameSite: 'strict',
			// only sent over HTTPS in production
			// secure: process.env.NODE_ENV === 'production',
			secure: false,
			// set cookie to expire after a month
			maxAge: 60 * 60 * 24 * 30
		});

		// redirect the user
		throw redirect(302, '/profile');
	}
};
