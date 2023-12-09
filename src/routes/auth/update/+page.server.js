//import { fail, redirect } from '@sveltejs/kit';
export const actions = {
	update: async ({ request} ) => {
		const formData = await request.formData();
		console.log(formData);

	}
};
