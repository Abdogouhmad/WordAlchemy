import { fail, redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import { db } from '$lib/db.js';

export const actions = {
	login: async ({ cookies, request }) => {
		const FormData = await request.formData();
		const loginUser = FormData.get('credentials');
		const password = FormData.get('password');

		if (typeof loginUser !== 'string' || typeof password !== 'string' || !loginUser || !password) {
			return fail(400, { invalidFormat: true });
		}

		// find first
		const user = await db.user.findFirst({
			where: {
				OR: [{ email: loginUser }, { username: loginUser }]
			}
		});

		if (!user) {
			return fail(400, { credentials: true });
		}

		// check password
		const userPassword = await bcrypt.compare(password, user.password);

		if (!userPassword) {
			return fail(400, { credentials: true });
		}

		// create session
		const session = crypto.randomUUID();

		const Auth = await db.user.update({
			where: {
				id: user.id
			},
			data: {
				session
			}
		});

		console.log('authenticatedUser.session -->', Auth.session);

		cookies.set('session', Auth.session, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: true,
			maxAge: 60 * 60 * 24 * 7
		});

		throw redirect(302, '/profile/collection');
	}
};
