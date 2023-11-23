/** @type {import('./$types').PageServerLoad} */
import { fail, redirect } from '@sveltejs/kit';
import { AuthApiError } from '@supabase/supabase-js';

export const actions = {
	default: async ({ request, locals: { supabase } }) => {
		const body = Object.fromEntries(await request.formData());
		const { email, password } = body;

		const { error } = await supabase.auth.signInWithPassword({
			email,
			password
		});

		if (error) {
			if (error instanceof AuthApiError && error.status === 400) {
				return fail(400, {
					error: 'Invalid credentials'
				});
			}
			return fail(500, {
				message: 'Server error. Try again later.'
			});
		}

		throw redirect(303, '/auth/callback');
	}
};