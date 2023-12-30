/** @type {import('./$types').PageServerLoad} */
import { fail } from '@sveltejs/kit';
import { db } from '$lib/db.js';
import { sendResetPasswordEmail } from '$lib/sendemail';

export const actions = {
	reset: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email');

		if (typeof email !== 'string' || !email) {
			return fail(400, {
				invalideFormat: true
			});
		}

		const user = await db.user.findUnique({
			where: {
				email
			}
		});

		if (!user) {
			return fail(400, {
				credentials: true
			});
		}

		await sendResetPasswordEmail(email);
	}
};
