import { db } from '$lib/db';

async function main() {
	await db.user.deleteMany({});
	// console.log(`Created user with id: ${user.id}`);
	console.log('Database seeded!');
}

main()
	.then(async () => {
		await db.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await db.$disconnect();
		process.exit(1);
	});
