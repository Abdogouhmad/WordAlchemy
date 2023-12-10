import { fail } from '@sveltejs/kit';

export const actions = {
	register: async ({ request }) => {
		// TODO register the user
		const formData = await request.formData();
		// const email = formData.get('email');
		const password = formData.get('password');
		const confirmpassword = formData.get('confirm password');

		if (password !== confirmpassword) {
			console.log('password do not match');
			return fail(400, {
				message: 'password do not match'
			});
		} else {
			console.log('password match');
		}
	}
};
