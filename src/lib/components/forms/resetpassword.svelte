<script>
	import { enhance } from '$app/forms';
	export let form;
	import Checkform from './checkform.svelte';
	let isFormSubmitted = false;
	let isFormSuccess = true;
	const resetpassword = async () => {
		try {
			const response = await fetch('/auth/reset');
			if (response.ok) {
				console.log('check your email');
				isFormSuccess = true;
				isFormSubmitted = true;
			} else {
				isFormSuccess = false;
				isFormSubmitted = true;
			}
		} catch (error) {
			console.error('Error:', error);
		}
	};
</script>

<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
	<a href="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
		WordAlchemy
	</a>
	<div
		class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8"
	>
		<h2
			class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
		>
			Change Password
		</h2>
		<form
			class="mt-4 space-y-4 lg:mt-5 md:space-y-5"
			use:enhance
			method="post"
			action="?/reset"
			on:submit|preventDefault={resetpassword}
		>
			<div>
				<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Your email</label
				>
				<input
					type="email"
					name="email"
					id="email"
					class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="name@company.com"
					value={form?.email ?? ''}
					required
				/>
			</div>
			<button
				type="submit"
				class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>Reset passwod</button
			>
			<Checkform {isFormSubmitted} {isFormSuccess} />
		</form>
	</div>
</div>
