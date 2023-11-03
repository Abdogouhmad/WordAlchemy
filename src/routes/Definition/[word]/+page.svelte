<script>

	import { fade } from 'svelte/transition';
	import { Meaning } from '$lib';

	let pagetitle = `Definition`;
	let description = `Definition page`;
	export let data;
	$: ({ result, pathname } = data);
</script>

<svelte:head>
	<title>{pagetitle}</title>
	<meta name="description" content={description} />
</svelte:head>

{#key pathname}
	<div in:fade={{ delay: 300 }}>
		<h1 class="text-3xl justify-center ">{result ? result.word : ''}</h1> 
	</div>
{/key}
