import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/db.js';
import bcrypt from 'bcrypt';

export const load = async ({ params }) => {
	const token = params.RestPasswordToken;

	// find the user in the database

	const user = await db.user.findUnique({
		where: {
			RestPasswordToken: String(token)
		}
	});

	if (!user) {
		throw redirect(302, '/auth/update/error');
	}

	return {
		ValidToken: true
	};
};

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
			console.log('invalid format');
			return fail(400, {
				invalideFormat: true
			});
		}

		// update the password in the database
		const token = params.RestPasswordToken;
		const UserUpdated = await db.user.update({
			where: {
				RestPasswordToken: String(token)
			},
			data: {
				password: await bcrypt.hash(password, 10)
			}
		});

		if (UserUpdated) {
			throw redirect(302, '/auth/login');
		}
	}
};
