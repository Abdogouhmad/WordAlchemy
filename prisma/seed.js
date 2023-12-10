import { db } from '$lib/db';

async function main() {
	const user = await db.user.createMany({
		data: [
			{
				username: 'man',
				email: 'cool@gmail.com',
				password: 'abdo',
				session: '2000002'
			},
			{
				username: 'abdo3',
				email: 'abdo10@gmail.com',
				password: 'abdo2',
				session: '2000003'
			}
		]
	});
	console.log(`Created user with id: ${user.id}`);
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
