<script>
	export let form;
	let title = 'Register';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
	<div
		class="w-full  bg-white rounded-lg shadow-lg shadow-blue-400/50 dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
		<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
			<h1
				class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
				Create an account
			</h1>
			<form class="space-y-4 md:space-y-6" method="post" action="?/register">
				<div>
					<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Your Username</label>
					<input
						type="text"
						name="username"
						id="username"
						class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="username"
						required />
				</div>
				<div>
					<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Your email</label>
					<input
						type="email"
						name="email"
						id="email"
						class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="name@company.com"
						required />
				</div>
				<div>
					<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Password</label>
					<input
						type="password"
						name="password"
						placeholder="your password"
						class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						required />
				</div>
				<div>
					<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Confirm password</label>
					<input
						type="password"
						name="confirm password"
						placeholder="confirm your password"
						class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						required />
				</div>
				<div class="flex items-start">
					<div class="flex items-center h-5">
						<input
							id="terms"
							aria-describedby="terms"
							type="checkbox"
							class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
							required />
					</div>
					<div class="ml-3 text-sm">
						<label for="terms" class="font-light text-gray-500 dark:text-gray-300"
							>I accept the <a
								class="font-medium text-blue-600 hover:underline dark:text-blue-500"
								href="/">Terms and Conditions</a
							></label>
					</div>
				</div>
				<!-- ! insert the form check here -->
				{#if form?.PassNotMatch}
					<div class="pt-3">
						<h1 class="bg-red-300 text-red-500 p-2.5 justify-center text-center w-full rounded-lg">
							{form?.PassNotMatch}
						</h1>
					</div>
				{:else if form?.invalidFormat}
					<div class="pt-3">
						<h1 class="bg-red-300 text-red-500 p-2.5 justify-center text-center w-full rounded-lg">
							Invalid Format
						</h1>
					</div>
				{:else if form?.emailTaken}
					<div class="pt-3">
						<h1 class="bg-red-300 text-red-500 p-2.5 justify-center text-center w-full rounded-lg">
							Credentials already taken
						</h1>
					</div>
				{:else if form?.emailSent}
					<div class="pt-3">
						<h1 class="bg-green-200 text-green-700 font-bold p-2.5 justify-center text-center w-full rounded-lg">
							check your email for a verification link
						</h1>
					</div>
				{:else if form?.emailNotSent}
					<div class="pt-3">
						<h1 class="bg-red-300 text-red-500 p-2.5 justify-center text-center w-full rounded-lg">
							Email is not send try again
						</h1>
					</div>
				{/if}
				<button
					type="submit"
					class="w-full text-white bg-blue-600 hover:bg-blue-700
					focus:ring-4 focus:outline-none focus:ring-blue-300
					font-medium rounded-lg text-sm px-5 py-2.5 text-center
					dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create an account</button>
				<p class="text-sm font-light text-gray-500 dark:text-gray-400">
					Already have an account? <a
						href="/auth/login"
						class="font-medium text-blue-600 hover:underline dark:text-blue-500">Login here</a>
				</p>
			</form>
		</div>
	</div>
</div>
