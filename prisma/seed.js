import { db } from '$lib/db';

async function main() {
	// await db.category.deleteMany({});
	// await db.word.deleteMany({});
	// console.log('Database cleaned');
	// fill the category and word database
	//--------------------------------------------------------------------
	const User = await db.user.findUnique(
		{ where: { email: 'gouhmada@gmail.com' } }
	);
	if (!User) {
		throw new Error('User not found');
	}

	// create category
	const category = await db.category.create({
		data: {
			namecategory: 'Education',
			userId: User.id
		}
	});
	if (!category) {
		throw new Error('Category couldn\'t be created');
	}

	// create word
	const word = await db.word.create({
		data: {
			wordtodefine: 'school',
			categoryId: category.id
		}
	});
	if (!word) {
		throw new Error('Word couldn\'t be created');
	}
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
