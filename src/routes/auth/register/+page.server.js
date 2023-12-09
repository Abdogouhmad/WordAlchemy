import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email');
		const password = formData.get('password');

		console.log(formData);
		const { error } = await supabase.auth.signUp({
			email,
			password
		});

		if (error) {
			return fail(500, {
				email
			});
		}

		return {
			email
		};
	}
};
