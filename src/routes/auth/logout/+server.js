import { redirect } from '@sveltejs/kit';

export const POST = async () => {
    throw redirect(302, '/auth/login');
};
