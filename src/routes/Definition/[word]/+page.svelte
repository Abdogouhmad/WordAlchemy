<script>
	import { page } from '$app/stores';
	let word = $page.params.word;
	let pagetitle = `Definition of ${word}`;
	let description = `Definition page of  ${word}`;

	export let data;
	$: define = data.define;

	console.log('data:', data);
	console.log('word:', word);
	console.log('define:', define);
</script>

<svelte:head>
	<title>{pagetitle}</title>
	<meta name="description" content={description} />
</svelte:head>

<main class="pt-20">
	<h1 class="text-6xl flex justify-center text-blue-600 font-black">{word}</h1>
	{#if define}
		<h2 class="text-2xl flex justify-center text-blue-600 font-black">{define}</h2>
	{:else}
		<h2 class="text-2xl flex justify-center text-blue-600 font-black">No definition found</h2>
	{/if}
</main>
<!-- #TODO: Add the definition it is not working -->