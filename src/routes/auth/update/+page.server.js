import { fail, redirect } from '@sveltejs/kit';
export const actions = {
	default: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email');
		const new_password = formData.get('password');
		const confirm_password = formData.get('confirm_password');
		console.log(email, new_password);
		console.log(confirm_password);

		// Check if passwords match
		if (new_password !== confirm_password) {
			return fail(400, {
				message: 'Passwords do not match',
				success: false
			});
		}

		// Update password
		const { error } = await supabase.auth.updateUser({
			email,
			password: new_password
		});

		if (error) {
			return fail(500, {
				message: 'Server error. Try again later.',
				success: false
			});
		} else {
			console.log('Password updated successfully');
			throw redirect(302, '/auth/login');
		}
	}
};
