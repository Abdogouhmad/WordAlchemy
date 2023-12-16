// load collections

export async function load({ locals }) {
	const user = await prisma.user.findUnique({
		where: { id: locals?.user.id }
	});

	const myCollections = await prisma.collection.findMany({
		where: { userId: locals?.user.id },
		include: {
			words: true
		}
	});

	// return { status: 200, body: JSON.stringify(collections) };

	// return new Response({ body: collections }, { status: 200 });

	return {
		user: locals.user,
		myCollections
	};
}
