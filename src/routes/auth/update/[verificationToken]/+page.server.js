import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/db.js';
//import { params } from '$app';

export const actions = {
	update: async ({ request, params }) => {
		const formData = await request.formData();
		const password = formData.get('password');
		const confirmpassword = formData.get('confirm password');

		// compare the password if they are the same
		if (password !== confirmpassword) {
			console.log('password do not match');
			return fail(400, {
				NotMatch: 'password do not match'
			});
		}

		// check if the password is valid format
		if (
			typeof password !== 'string' ||
			typeof confirmpassword !== 'string' ||
			!password ||
			!confirmpassword
		) {
			console.log('invalide format');
			return fail(400, {
				invalideFormat: true
			});
		}

		// update the password in the database

		const verificationToken = params.verificationToken;
		// find the user in the database
		const user = await db.user.findUnique({
			where: {
				verificationToken
			}
		});

		// check if the user exists
		if (user && !user.verified) {
			// update the password in the database
			await db.user.update({
				where: {
					verificationToken
				},
				data: {
					password
				}
			});
			// redirect to the login page
			throw redirect(302, '/auth/login');
		} else {
			throw redirect(302, '/');
		}
	}
};
