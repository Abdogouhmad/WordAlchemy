<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	let word = $page.params.word;
	let pagetitle = `Definition of ${word}`;
	let description = `Definition page of  ${word}`;
	let define = '';
	// call the api
	onMount(async () => {
		let url = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
		let data = await url.json();
		define = data[0]?.meanings[1]?.definitions[0]?.definition;
		console.log(JSON.stringify(define, null, 4));
	});
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
