<script>
	/** @type {import('./$types').PageData} */
	// import { Logoutform } from '$lib';
	export let data;
</script>

<section class="flex justify-center items-center">
	<div class="flex flex-col">
		<h1 class="text-blue-600 text-2xl font-bold">Dashboard</h1>
		{#if data.session}
			<h1 class="text-red-600 text-2xl">Welcome {data.session.user.email}</h1>
			<!-- <Logoutform /> -->
		{:else}
			<h1 class="text-red-600 text-2xl">You are not logged in</h1>
		{/if}
	</div>
</section>
