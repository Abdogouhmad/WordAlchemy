import { redirect } from '@sveltejs/kit';
import { db } from '$lib/db.js';

export const load = async (context) => {
	const { params } = context;
	console.log('params:', params); // Log the params object

	const verificationToken = params.verificationToken;

	const user = await db.user.findUnique({
		where: {
			verificationToken
		}
	});

	if (user && !user.verified) {
		await db.user.update({
			where: {
				verificationToken
			},
			data: {
				verified: true
			}
		});

		throw redirect(302, '/auth/login');
	} else {
		throw redirect(302, '/');
	}
};
