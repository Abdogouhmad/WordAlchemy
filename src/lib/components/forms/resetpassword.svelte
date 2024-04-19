<script>
	let title = 'Reset Password';
	let description = 'form for reseting password';
	export let form;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
	<div
		class="w-full p-6 bg-white border border-blue-500/45 rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md dark:bg-gray-900 dark:border-gray-800 sm:p-8">
		<h2
			class="mb-1 text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
			Forgot Your Password ?
		</h2>
		<form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" method="post" action="?/reset">
			<div>
				<label for="email" class="block mb-3 text-base font-medium text-gray-900 dark:text-white"
					>Email:
				</label>
				<input
					type="email"
					name="email"
					class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="your email"
					required />
			</div>
			{#if form?.credentials}
				<div class="bg-red-300 rounded-lg p-3 w-full">
					<h1 class=" text-red-500 text-center">Email not found in our database</h1>
				</div>
			{:else if form?.invalidFormat}
				<div class="bg-red-300 p-2.5 w-full rounded-lg">
					<h1 class=" text-red-500 text-center">Invalid format</h1>
				</div>
			{:else if form?.notVerified}
				<div class="bg-red-300 p-2.5 w-full rounded-lg">
					<h1 class=" text-red-500 text-center">
						Sorry we can't send you email you are not verified
					</h1>
				</div>
			{/if}
			<button
				type="submit"
				class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>Reset passwod</button>
		</form>
	</div>
</div>
