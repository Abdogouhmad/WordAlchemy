import { redirect } from '@sveltejs/kit';
/**
 *	PUT request
 * @param {object} params - Request parameters
 * @param {object} params.cookies - Cookies object
 * @returns {Promise<Response>} - Response object
 */
export async function PUT({ cookies }) {
	try {
		// Clear session cookie
		cookies.set('session', '', {
			path: '/',
			expires: new Date(0)
		});
		// Redirect to login page
		throw redirect(302, '/auth/login');
	} catch (error) {
		console.log(error);

		// Return error response
		return new Response(
			JSON.stringify({
				status: 500
			})
		);
	}
}
