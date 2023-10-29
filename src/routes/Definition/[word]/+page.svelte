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

<div class="text-black font-thin justify-center flex pt-1 text-justify text-sm">
	<p>
		Definition of <b class="font-bold text-gray-700">{word}</b> From The WordAlchemy's Dictionary
	</p>
</div>
<section class="flex flex-col">
	<!-- * header -->

	<!-- * top container -->
	{#if data}
		<div class="flex md:items-center p-10 flex-col">
			<!-- align to left -->
			<h1 class="text-5xl font-bold text-black">
				{word} <em class="font-normal text-base text-blue-700">{partspch}</em>
			</h1>
			<h2 class="pt-5">
				<a href={phoniaudio} class="flex flex-row">
					<img src={audio} alt="audio" class="mx-2" />
					<p class="text-blue-700">{phontics}</p>
				</a>
			</h2>
			<div class="pt-5 flex flex-row justify-between">
				<h1 class="font-bold md:text-3xl text-2xl text-black"><em>Meanings</em></h1>
				<hr class="w-[15cm]  mx-2 border-1 border-black md:my-5 my-5">
			</div>
		</div>
		<div class="flex font-normal pl-5 md:p-10 lg:pl-[390px] pr-2  text-justify  ">
			<h1 class="text-black ">
				{define}
			</h1>
		</div>
	{:else}
		<div class="pt-10">
			<h1 class="text-center justify-center flex text-6xl text-red-600">
				No definition for the word: <b>{word}</b>
			</h1>
		</div>
	{/if}
</section>
<!-- #TODO: Add the definition it is not working -->

<style>
	.divider {
		flex-grow: 1;
		border-top: 1px solid black;
		margin-left: 10px; /* Adjust the margin as needed */
	}
</style>
