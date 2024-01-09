import { redirect } from '@sveltejs/kit';
import { db } from '$lib/db.js';

/**
 * Load function to verify user's verification token and update user's verification status in the database
 * @param {Object} context - The context object containing the parameters
 * @returns {Promise<void>} - A promise that resolves when the verification is complete
 */
export const load = async (context) => {
	const { params } = context;

	// Extract verification token from params
	const verificationToken = params.verificationToken;

	// Find user with the given verification token
	const user = await db.user.findUnique({
		where: {
			verificationToken
		}
	});

	if (user && !user.verified) {
		// Update user's verification status to true
		await db.user.update({
			where: {
				verificationToken
			},
			data: {
				verified: true
			}
		});

		// Redirect to login page
		throw redirect(302, '/auth/login');
	} else {
		// Redirect to home page
		throw redirect(302, '/');
	}
};
