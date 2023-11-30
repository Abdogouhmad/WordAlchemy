<script>
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';

	let form;
	let password;
	let confirm_password;

	onMount(() => {
		// Accessing DOM elements after the component has mounted
		password = document.getElementById('password');
		confirm_password = document.getElementById('confirm_password');
	});

	const confirmpassword = async () => {
		try {
			if (password && password.value !== confirm_password.value) {
				confirm_password.closest('form').reportValidity();
			} else {
				// Your form submission logic goes here
				const response = await fetch('/auth/update');
			}
		} catch (error) {
			console.error(error);
		}
	};
</script>

<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
	<a href="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
		WordAlchemy
	</a>
	<div
		class="w-full bg-white rounded-lg border hover:border-blue-300/50 shadow-xl shadow-blue-400/50 dark:border md:mt-0 sm:max-w-md dark:shadow xl:p-0 dark:bg-gray-900/60 dark:border-black"
	>
		<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
			<h1
				class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
			>
				Reset Your Password
			</h1>
			<form
				class="space-y-4 md:space-y-6"
				method="post"
				use:enhance
				on:submit|preventDefault={confirmpassword}
			>
				<div>
					<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Your email</label
					>
					<input
						type="email"
						name="email"
						id="email"
						class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="name@company.com"
						required
						value={form?.email ?? ''}
					/>
				</div>
				<div>
					<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Your New Password</label
					>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="your new password"
						class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						bind:value={password}
						required
					/>
				</div>
				<div>
					<label
						for="Confirm Password"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>confirm New Password</label
					>
					<input
						type="password"
						name="confirm_password"
						id="confirm_password"
						placeholder="confirm your new password"
						class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						bind:value={confirm_password}
						required
					/>
				</div>
				<button
					type="submit"
					class="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4
                    focus:outline-none focus:ring-blue-300
                    font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
                    dark:focus:ring-blue-800">Log in</button
				>
			</form>
		</div>
	</div>
</div>
