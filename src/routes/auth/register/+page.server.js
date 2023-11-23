/** @type {import('./$types').PageServerLoad} */
import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, url, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email');
		const password = formData.get('password');

		const { error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `https://word-alchemy-git-login-div-styl.vercel.app/auth/callback`
			}
		});
		console.log(email, password)
		// console.log(url.origin);

		if (error) {
			return fail(500, { message: 'Server error. Try again later.', success: false, email });
		}

		return {
			message: 'Please check your email for a magic link to log into the website.',
			success: true
		};
	}
};