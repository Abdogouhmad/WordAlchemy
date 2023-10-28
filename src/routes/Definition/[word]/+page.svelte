<script>
	import { page } from '$app/stores';
	import { b } from 'vitest/dist/reporters-5f784f42';
	let word = $page.params.word;
	let pagetitle = `Definition of ${word}`;
	let description = `Definition page of  ${word}`;

	export let data;
	$: define = data.def.define;// #TODO: fix the props
	$: phontics = data.phoni.phonetics;
	$: partspch = data.partsp.partofspeach;
	$: phoniaudio = data.phoniaudio.phoneaudio;

	console.log('data from page:', JSON.stringify(data, null, 4));
</script>

<svelte:head>
	<title>{pagetitle}</title>
	<meta name="description" content={description} />
</svelte:head>

<main class="pt-2">
	<!-- * header -->
	<div class="text-black font-thin justify-center flex text-justify text-sm">
		<p>
			Definition of <b class="font-bold text-gray-700">{word}</b> From The WordAlchemy's Dictionary
		</p>
	</div>
	<!-- * top container -->
	{#if define}
		<div class="flex justify-center pt-5">
			<!-- align to left -->
			<div class="flex justify-start">
				<h1 class="text-5xl font-bold text-blue-600">{word} <em class="font-normal text-2xl text-gray-700 ">{partspch}</em></h1>
			</div>
		</div>
		<div class="flex justify-center pt-5 border border-t border-black">
			<!-- align to left -->
			<p class="text-black text-3xl font-bold">Hello world</p>
		</div>	
	{:else}
		<h1 class="text-center justify-center flex text-6xl text-red-600">
			No definition for the word: <b>{word}</b>
		</h1>
	{/if}
</main>
<!-- #TODO: Add the definition it is not working -->
