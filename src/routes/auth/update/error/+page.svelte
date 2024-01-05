<script>
	let title = 'Error updating password';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<main
	class="flex flex-col items-center justify-center min-h-screen dark:text-gray-100 px-4 py-8 md:px-6 lg:px-8">
	<div class="max-w-md mx-auto">
		<div class="text-center">
			<svg
				class="mx-auto h-12 w-12 text-red-500 dark:text-red-400"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor">
				<path d="m8 2 1.88 1.88" />
				<path d="M14.12 3.88 16 2" />
				<path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
				<path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
				<path d="M12 20v-9" />
				<path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
				<path d="M6 13H2" />
				<path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
				<path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
				<path d="M22 13h-4" />
				<path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
			</svg>
			<h2 class="mt-2 text-3xl font-extrabold text-gray-900 dark:text-gray-100">
				Oops! Something went wrong.
			</h2>
			<p class="mt-2 text-lg text-gray-600 dark:text-gray-400">
				We're sorry, but we can't process your request right now. Please try again later. If the
				problem persists, contact our support team.
			</p>
		</div>
		<div class="mt-6 flex justify-center gap-4">
			<button
				class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
				on:click={() => (window.location.href = '/')}>
				Go Home
			</button>
		</div>
	</div>
</main>
