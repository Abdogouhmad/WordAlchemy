<script>
	// import audio from '$lib/assets/audio.svg';
	// import { page } from '$app/stores';

	export let data;
	$: partspch = data?.dataparesed?.partofspeech;
	$: wordifne = data?.dataparesed?.worddictionary;
	$: define = [
		data?.dataparesed?.difine0 ||
			data?.dataparesed?.difine1 ||
			data?.dataparesed?.difine2 ||
			'no definition found'
	].filter(Boolean);
	$: examples = [
		data?.dataparesed?.example0 ||
			data?.dataparesed?.example1 ||
			data?.dataparesed?.example2 ||
			'no example found'
	].filter(Boolean);

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

<section class="@container flex flex-col">
	<!-- * top container -->
	{#if data}
		<div class="flex md:items-center p-10 flex-col">
			<!-- align to left -->
			<h1 class="text-5xl font-bold">
				{wordifne} <em class="font-normal text-base text-blue-600">{partspch}</em>
			</h1>
			<div class="pt-5 flex flex-row justify-between">
				<h1 class="font-bold md:text-2xl italic text-base mx-3">{partspch}</h1>
				<hr class="w-[15cm] mx-2 border-1 md:my-5 my-5" />
			</div>
			<!-- !meaning section -->
			<div>
				<h2 class="md:text-2xl text-base font-semibold italic">Meaning</h2>
				<ul class="pt-5 text-justify text-sm md:text-base font-medium list-disc list-inside">
					<li class="text-base md:text-center leading-relaxed">
						{#each define as def}
							{def}
							{#if examples && examples.length > 0}
								{#each examples as ex}
									<q class="block text-sm text-[#979797] italic pt-2">{ex}</q>
								{/each}
							{/if}
						{/each}
					</li>
				</ul>
			</div>

			<!-- 
			<p class=" text-justify text-sm md:text-base pt-5 font-medium">
				{#each define as def}
					{def}
				{/each}
			</p> -->
		</div>
	{:else}
		<div class="pt-10">
			<h1 class="text-center justify-center flex text-6xl text-red-600">
				No definition for the word: <b>{wordifne}</b>
			</h1>
		</div>
	{/if}
</section>
