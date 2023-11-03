<script>
	import { PageData } from './$types';
	import { fade } from 'svelte/transition';
	import { Meaning } from '$lib';

	let pagetitle = `Definition`;
	let description = `Definition page`;
	export const data = PageData;
	$: ({ result, pathname } = data);
</script>

<svelte:head>
	<title>{pagetitle}</title>
	<meta name="description" content={description} />
</svelte:head>

{#key pathname}
	<div in:fade={{ delay: 300 }}>
		<Meaning data={result[0]} />
	</div>
{/key}
