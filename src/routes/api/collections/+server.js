import { redirect } from '@sveltejs/kit';

import { prisma } from '../../../lib/server/prisma';

export async function POST({ request, headers, cookies }) {
	// const myHeader = headers['Authorization'];

	const { name } = await request.json();

	// const authorizationHeader = headers.get('Authorization');

	// console.log('your authorizationHeader ->', authorizationHeader);
	// console.log('your myHeader ->', myHeader);

	const session = cookies.get('session');
	// const isAuthenticated = authorizationHeader === session;

	if (!session) {
		// return { status: 401, body: 'Unauthorized' };

		return new Response({ body: 'Unauthorized' }, { status: 401 });
	}

	const user = await prisma.user.findUnique({
		where: { session }
	});

	// const { name } = JSON.parse(body);
	const newCollection = await prisma.collection.create({
		data: {
			name,
			userId: user.id
		},
		include: {
			words: true
		}
	});

	// return { status: 201, body: newCollection };

	// return new Response({ body: newCollection }, { status: 201 });

	return new Response(JSON.stringify(newCollection), {
		status: 201
	});
}

// ----------------------------------------------------
export async function DELETE({ request, headers, cookies }) {
	// const myHeader = headers['Authorization'];

	const { id } = await request.json();

	const session = cookies.get('session');

	if (!session) {
		return new Response({ body: 'Unauthorized' }, { status: 401 });
	}

	await prisma.word.deleteMany({
		where: { collectionId: id }
	});

	await prisma.collection.delete({
		where: { id }
	});

	return new Response(JSON.stringify({ message: 'collection deleted' }), {
		status: 201
	});
}
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
export async function GET({ request, headers, cookies }) {
	// console.log('your request ->', request);

	// const authorizationHeader = headers.get('Authorization');

	// console.log('your authorizationHeader ->', authorizationHeader);

	const session = cookies.get('session');
	// const isAuthenticated = authorizationHeader === session;

	if (!session) {
		// return { status: 401, body: 'Unauthorized' };

		return new Response({ body: 'Unauthorized' }, { status: 401 });
	}

	const user = await prisma.user.findUnique({
		where: { session }
	});

	const collections = await prisma.collection.findMany({
		where: { userId: user.id }
	});

	// return { status: 200, body: JSON.stringify(collections) };

	return new Response({ body: collections }, { status: 200 });
}
// ----------------------------------------------------

// ----------------------------------------------------

// export async function get({ headers }) {
// 	const session = await getSession(headers);

// 	if (!session) {
// 		return { status: 401, body: 'Unauthorized' };
// 	}

// 	const collections = await prisma.collection.findMany({
// 		where: { userId: session.userId }
// 	});

// 	return { status: 200, body: collections };
// }
// // ----------------------------------------------------
// export async function GET({ cookies }) {
// 	try {
// 		cookies.get('session');
// 	} catch (error) {
// 		console.error('error ->', error);
// 		return new Response({ message: 'Could not logout try again.' }, { status: 200 });
// 	}

// 	// return new Response({ loggedOut: true }, { status: 200 });
// }

// // create collection

// // update collection

// // remove collection
// // ----------------------------------------------------
// export async function PUT({ cookies }) {
// 	try {
// 		console.log('cookie before', cookies.get('session'));

// 		cookies.set('session', '', {
// 			path: '/',
// 			expires: new Date(0)
// 		});

// 		console.log('cookie after', cookies.get('session'));
// 	} catch (error) {
// 		console.error('error ->', error);
// 		return new Response({ message: 'Could not logout try again.' }, { status: 200 });
// 	}

// 	// return new Response({ loggedOut: true }, { status: 200 });
// }
