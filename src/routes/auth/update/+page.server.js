//import { fail } from '@sveltejs/kit';
export const actions = {
	default: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email');
		const new_password = formData.get('password');
		console.log(email, new_password);
	}
};
