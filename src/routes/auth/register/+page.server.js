// import { fail } from '@sveltejs/kit';

export const actions = {
	register: async ({ request }) => {
		// TODO register the user
		const formData = await request.formData();
		console.log(formData);
	}
};
