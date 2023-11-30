/** @type {import('./$types').PageServerLoad} */
import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email');
		console.log(email);
		try {
			const { error } = await supabase.auth.resetPasswordForEmail({
				email,
				options: {
					emailRedirectTo: `https://word-alchemy-git-login-div-styl.vercel.app/auth/update`
				}});
			if (error) {
				return fail(500, {
					message: 'Server error. Try again later.',
					success: false,
					email
				});
			} else {
				return {
					message: 'Please check your email for a magic link to log into the website.',
					success: true
				};
			}
		} catch (error) {
			return fail(500, {
				message: 'Server error. Try again later.',
				success: false,
				email
			});
		}
	}
};
