/** @type {import('./$types').PageServerLoad} */
// import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	login: async ({ request }) => {
		const FormData = await request.formData();
		//const { email, password } = FormData;

		console.log(FormData);
	}
};
