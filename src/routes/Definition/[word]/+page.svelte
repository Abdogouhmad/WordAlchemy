<script>
	import audio from '$lib/assets/audio.svg';
	import { page } from '$app/stores';

	export let data;
	$: wordifne = data.worddictionary;
	$: define = data.firstarr.definitions[0].definition;
	$: examples = data.firstarr.definitions[0].example;
	$: partspch = data.firstarr.partOfSpeech;

	let pagetitle = `Definition of ${wordifne}`;
	let description = `Definition page of  ${wordifne}`;

	console.log('data from page:', JSON.stringify(data, null, 4));
</script>

<svelte:head>
	<title>{pagetitle}</title>
	<meta name="description" content={description} />
</svelte:head>

<div class=" font-light justify-center flex pt-5 text-justify text-sm">
	<p>
		Definition of <b class="font-bold text-blue-400">{wordifne}</b> From The WordAlchemy's Dictionary
	</p>
</div>

<section class="flex flex-col">
	<!-- * top container -->
	{#if data}
		<div class="flex md:items-center p-10 flex-col">
			<!-- align to left -->
			<h1 class="text-5xl font-bold">
				{wordifne} <em class="font-normal text-base text-blue-600">{partspch}</em>
			</h1>

			<p class=" text-justify text-sm md:text-base pt-5 font-medium">
				{#each define as def}
					{def}
				{/each}
			</p>
		</div>
	{:else}
		<div class="pt-10">
			<h1 class="text-center justify-center flex text-6xl text-red-600">
				No definition for the word: <b>{wordifne}</b>
			</h1>
		</div>
	{/if}
</section>
