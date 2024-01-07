/** @type {import('./$types').PageServerLoad} */
import { fail } from '@sveltejs/kit';
import { db } from '$lib/db.js';
import { sendResetPasswordEmail } from '$lib/sendemail';
import crypto from 'crypto';


/**
 * Resets the user's password.
 * 
 * @param {Object} options - The options object.
 * @param {Object} options.request - The request object.
 * @returns {Promise<Object>} - A promise that resolves with the result of the reset operation.
 */
export const actions = {
	reset: async ({ request }) => {
		// Parse the form data
		const formData = await request.formData();
		const email = formData.get('email');

		// Check if the email is valid
		if (typeof email !== 'string' || !email) {
			return fail(400, {
				invalideFormat: true
			});
		}

		// Find the user in the database
		const user = await db.user.findUnique({
			where: {
				email
			}
		});

		// Check if the user exists
		if (!user) {
			return fail(400, {
				credentials: true
			});
		}

		// Check if the user is verified
		if (!user?.verified) {
			return fail(400, { notVerified: true });
		}

		// Generate a new RestPasswordToken
		const RestPasswordToken = crypto.randomBytes(16).toString('hex');

		// Update the user's RestPasswordToken in the database
		await db.user.update({
			where: { email },
			data: {
				RestPasswordToken
			}
		});

		// Send an email to the user
		await sendResetPasswordEmail(email, RestPasswordToken);
	}
};
