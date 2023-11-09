<script>
	// import audio from '$lib/assets/audio.svg';

	export let data;
	$: phonetic = data?.phonetics;
	$: wordefine = data?.word;

	let wordsearch, pagetitle, description;

	$: {
		wordsearch = wordefine;
		pagetitle = `WordAlchemy | Definition of ${wordsearch}`;
		description = `Definition page of ${wordsearch}`;
	}
</script>

<svelte:head>
	<title>{pagetitle}</title>
	<meta name="description" content={description} />
</svelte:head>

<div class=" font-light justify-center flex pt-5 text-justify text-sm">
	<p>
		Definition of <b class="font-bold whitespace-pre-line text-blue-400">{wordefine}</b> From The WordAlchemy's
		Dictionary
	</p>
</div>

<section class="@container flex flex-col">
	<!-- * top container -->
	{#if data}
		<div class="flex md:items-baseline p-10 flex-col">
			<!-- align to left -->
			<h1 class="text-5xl font-bold">
				{wordefine} <em class="font-normal text-base text-blue-600">{phonetic.text}</em>
			</h1>

			{#each data.meanings as meaning}
				<div class="pt-5 flex flex-row justify-between">
					<h1 class="font-bold md:text-2xl italic text-xl">{meaning.partOfSpeech}</h1>
					<hr class="w-full md:w-[25cm] mx-2 border-1 border-blue-600 my-4" />
				</div>
				<div>
					<h2 class="md:text-2xl pt-4 text-base font-semibold italic">Meaning</h2>
					<ul class="pt-5 text-sm md:text-base font-medium list-disc list-inside">
						{#each meaning.definitions as def}
							<li class="text-base my-2 text-start leading-relaxed">
								{def.definition}
								{#if def.example}
									<p class="block text-base text-blue-700 dark:text-blue-600/60 italic pt-3">{def.example}</p>
								{/if}
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	{:else}
		<div class="pt-10">
			<h1 class="text-center justify-center flex text-4xl text-red-600">
				No definition for the word: <b>{wordefine}</b>
			</h1>
		</div>
	{/if}
</section>
