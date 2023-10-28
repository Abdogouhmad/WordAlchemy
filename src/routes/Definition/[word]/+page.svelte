<script>
	import { page } from '$app/stores';
	import audio from '$lib/assets/audio.svg';
	let word = $page.params.word;
	let pagetitle = `Definition of ${word}`;
	let description = `Definition page of  ${word}`;

	export let data;
	$: define = data.define;
	$: phontics = data.phonetics;
	$: partspch = data.partofspeach;
	$: phoniaudio = data.phoneaudio;

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
	{#if data}
		<div class="flex md:p-[300px] p-10 flex-col pt-10">
			<!-- align to left -->
			<h1 class="text-3xl font-bold text-[#193258]">
				{word} <em class="font-normal text-base text-gray-700">{partspch}</em>
			</h1>
			<h2 class="pt-3">
				<a href={phoniaudio} class="flex flex-row">
					<img src={audio} alt="audio" class="mx-2" />
					{phontics}
				</a>
			</h2>
			<div class="border-b flex font-light text-justify pt-5 border-black">
				<h1>
					<em>{define}</em>
				</h1>
			</div>
		</div>
	{:else}
		<div class="pt-10">
			<h1 class="text-center justify-center flex text-6xl text-red-600">
				No definition for the word: <b>{word}</b>
			</h1>
		</div>
	{/if}
</main>
<!-- #TODO: Add the definition it is not working -->
