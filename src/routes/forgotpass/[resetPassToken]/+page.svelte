<script>
	export let data;
	export let form;

	const responsive = 'md:w-[700px] m-3 md:mx-auto lg:w-[700px] lg:mx-auto rounded-lg';
</script>

{#if data.validToken}
	<div class="{responsive} border border-blue-300">
		<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
			<div
				class="w-full p-6 bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
				<h2
					class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
					Change Password
				</h2>
				<form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="?/setNewPassword" method="POST">
					<div>
						<label
							for="password"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>New Password</label>
						<input
							type="password"
							name="password"
							placeholder="••••••••"
							class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							required="" />
					</div>
					<div>
						<label
							for="confirm-password"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Confirm password</label>
						<input
							type="confirm-password"
							name="confirm-password"
							placeholder="••••••••"
							class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							required="" />
					</div>

					{#if form?.success}
						<p class="text-green-600">password is reseted successfully</p>
					{/if}

					{#if form?.identicalPasswords}
						<p class="text-red-600">make sure the passwords are identical</p>
					{/if}

					<div class="flex items-start">
						<div class="flex items-center h-5">
							<input
								aria-describedby="newsletter"
								type="checkbox"
								class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
								required="" />
						</div>
						<div class="ml-3 text-sm">
							<label for="newsletter" class="font-light text-gray-500 dark:text-gray-300"
								>I accept the <a
									class="font-medium text-primary-600 hover:underline dark:text-primary-500"
									href="#">Terms and Conditions</a
								></label>
						</div>
					</div>
					<button
						type="submit"
						class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
						>Reset passwod</button>
				</form>
			</div>
		</div>
	</div>
{/if}
