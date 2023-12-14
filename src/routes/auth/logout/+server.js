import { redirect } from '@sveltejs/kit';

export async function PUT({ cookies }) {
	try {
		cookies.set('session', '', {
			path: '/',
			expires: new Date(0)
		});
		throw redirect(302, '/auth/login');
	} catch (error) {
		console.log(error);
		return new Response(
			JSON.stringify({
				status: 500
			})
		);
	}
}
