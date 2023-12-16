import { redirect } from '@sveltejs/kit';

import { prisma } from '../../../lib/server/prisma';

export async function POST({ request, headers, cookies }) {
	// const myHeader = headers['Authorization'];

	const { name, id } = await request.json();

	// const authorizationHeader = headers.get('Authorization');

	// console.log('your authorizationHeader ->', authorizationHeader);
	// console.log('your myHeader ->', myHeader);

	const session = cookies.get('session');
	// const isAuthenticated = authorizationHeader === session;

	if (!session) {
		// return { status: 401, body: 'Unauthorized' };

		return new Response({ body: 'Unauthorized' }, { status: 401 });
	}

	// const { name } = JSON.parse(body);
	const newWord = await prisma.word.create({
		data: {
			text: name,
			collectionId: id
		}
	});

	const updatedCollection = await prisma.collection.findUnique({
		where: { id },
		include: {
			words: true
		}
	});

	// return { status: 201, body: newCollection };

	// return new Response({ body: newCollection }, { status: 201 });

	return new Response(JSON.stringify(updatedCollection), {
		status: 201
	});
}
// ----------------------------------------------------
