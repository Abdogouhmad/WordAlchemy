/** @type {import('./$types').PageServerLoad} */
import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		// const email = formData.get('email');
		console.log (formData);
};
