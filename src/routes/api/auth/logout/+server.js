import { redirect } from '@sveltejs/kit';

export async function PUT({ cookies }) {
	try {
		console.log('cookie before', cookies.get('session'));

		cookies.set('session', '', {
			path: '/',
			expires: new Date(0)
		});

		console.log('cookie after', cookies.get('session'));
	} catch (error) {
		console.error('error ->', error);
		return new Response({ message: 'Could not logout try again.' }, { status: 200 });
	}

	// return new Response({ loggedOut: true }, { status: 200 });
}
