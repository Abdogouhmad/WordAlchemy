/** @type {import('./$types').PageServerLoad} */
export const actions = {
	default: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email');
		const password = formData.get('password');
		console.log(email, password);
	}
};
