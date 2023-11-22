<script>
	import AudioIcon from '$lib/assets/audio.svg';
	import { dictionaries } from '$lib/data';

	export let data;
	$: phonetic = data?.phonetics;
	$: wordefine = data?.word;
	$: audioSource = data?.phonetics.audio;

	const playaudio = () => {
		if (audioSource) {
			const audio = new Audio(audioSource);
			audio.play();
		} else {
			alert('No audio available for this word');
		}
	};

	export let wordsearch = '';
	export let pagetitle = '';
	export let description = '';

	$: {
		wordsearch = wordefine;
		pagetitle = `WordAlchemy | Definition of ${wordsearch}`;
		description = `Definition page of ${wordsearch}`;
	}
</script>

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
			<h1 class="text-5xl font-bold">
				{wordefine}
			</h1>
			<div class="flex flex-row">
				<button on:click={playaudio}>
					<img src={AudioIcon} alt="Audioicon" class="h-7 w-7" />
				</button> <em class="font-normal text-base text-blue-600 mx-3 my-3">{phonetic.text}</em>
			</div>
			{#each data.meanings as meaning}
				<div class="pt-5 flex flex-row justify-between">
					<h1 class="font-bold md:text-2xl italic text-xl">{meaning.partOfSpeech}</h1>
					<hr class="w-full md:w-[25cm] mx-2 border-1 border-blue-600 my-4" />
				</div>
				<div>
					<h2 class="md:text-2xl pt-4 text-base font-semibold italic">Meaning</h2>
					<ul
						class="pt-5 text-sm md:text-base marker:text-blue-600 font-medium list-disc list-outside"
					>
						{#each meaning.definitions as def}
							<li class="text-base my-2 text-start leading-relaxed">
								{def.definition}
								{#if def.example}
									<p class="text-base text-blue-800/90 dark:text-gray-500 italic pt-3">
										{def.example}
									</p>
								{/if}
							</li>
						{/each}
					</ul>
					<!-- ! Synonyms -->
					<div class="flex flex-row pt-5 space-x-3">
						{#if meaning.synonyms}
							<h2 class="text-base text-gray-400 font-semibold">Synonyms</h2>
							<span class="text-base font-medium text-blue-700">{meaning.synonyms}</span>
						{/if}
						{#if meaning.antonyms}
							<h2 class="text-base text-gray-400 font-semibold">Antonyms</h2>
							<span class="text-base font-medium text-blue-700">{meaning.antonyms}</span>
						{/if}
					</div>
				</div>
			{/each}
			<!-- sources -->
			<div class="pt-5 flex flex-row justify-between">
				<h1 class="font-bold md:text-2xl italic text-xl">Sources</h1>
				<hr class="w-full md:w-[25cm] mx-2 border-1 border-blue-600 my-4" />
			</div>
			<div class="flex flex-row pt-3 space-x-3">
				{#each dictionaries as { name, imageurl, wordlink }}
					<a href={wordlink + wordefine} target="_blank">
						<img src={imageurl} alt={name} class="w-10 h-10 rounded-full" />
					</a>
				{/each}
			</div>
		</div>
	{:else}
		<div class="pt-10">
			<h1 class="text-center justify-center flex text-4xl text-red-600">
				No definition for the word: <b>{wordefine}</b>
			</h1>
		</div>
	{/if}
</section>
