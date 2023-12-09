/** @type {import('./$types').PageServerLoad} */
// import { fail } from '@sveltejs/kit';

export const actions = {
	reset: async ({ request }) => {
		const formData = await request.formData();
		// const email = formData.get('email');
		console.log(formData);
	}
};
