/** @type {import('./$types').RequestHandler} */
import { error, redirect } from '@sveltejs/kit';

export const POST = async ({ locals }) => {
    const { error: err } = await locals.supabase.auth.signOut();

    if (err) {
        console.error('Error signing out:', err);
        throw error(500, {
            message: 'Server error. Try again later.'
        });
    }

    throw redirect(303, '/');
};