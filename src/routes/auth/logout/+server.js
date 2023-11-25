import { error, redirect } from '@sveltejs/kit';

export const POST = async ({ locals }) => {
    const { error: err } = await locals.supabase.auth.signOut();

    if (err) {
        console.error('Error signing out:', err);
        throw error(500, {
            message: 'Server error. Try again later.'
        });
    } else {
        console.log('Sign out successful');
        throw redirect(302, '/auth/login');
    }
};
