/** @type {import('./$types').PageServerLoad} */
import { fail } from '@sveltejs/kit';
export const actions = {
	default: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email');
		const new_password = formData.get('password');
		const confirm_password = formData.get('confirm_password');
		if (new_password !== confirm_password) {
			return fail(400, {
				message: 'Passwords do not match.',
				success: false,
				email
			});
		} else {
			const { error } = await supabase.auth.updateUser({ password: new_password });
			if (error) {
				return fail(500, {
					message: 'Server error. Try again later.',
					success: false,
					email
				});
			} else {
				console.log('Password updated');
			}
		}
	}
};
