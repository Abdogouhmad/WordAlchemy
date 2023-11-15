<script>
	import AudioIcon from '$lib/assets/audio.svg';

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

	let wordsearch, pagetitle, description, dictionaries;

	$: {
		wordsearch = wordefine;
		pagetitle = `WordAlchemy | Definition of ${wordsearch}`;
		description = `Definition page of ${wordsearch}`;
		dictionaries = [
			{
				name: 'Oxford',
				imageurl:
					'https://www.oxfordlearnersdictionaries.com/us/external/images/home_2020/OLD_home_productsOALD.png?version=2.3.40',
				wordlink: `https://www.oxfordlearnersdictionaries.com/definition/english/${wordsearch}`
			},
			{
				name: 'Merriam-Webster',
				imageurl:
					'https://th.bing.com/th/id/R.9ec2334023d1b77d96e817fec0867e92?rik=1o6%2f82j%2b732iNg&pid=ImgRaw&r=0',
				wordlink: `https://www.merriam-webster.com/dictionary/${wordsearch}`
			},
			{
				name: 'Collins',
				imageurl:
					'https://th.bing.com/th/id/R.4b6538cbae2736939980764d3ead4815?rik=nbJverqn8NEXmQ&pid=ImgRaw&r=0',
				wordlink: `https://www.collinsdictionary.com/dictionary/english/${wordsearch}`
			},
			{
				name: 'Wikipedia',
				imageurl:
					'https://th.bing.com/th/id/R.e156c235334d36c76030c3724a3a091e?rik=z2fOIIhlHdNnlA&pid=ImgRaw&r=0',
				wordlink: `https://en.wikipedia.org/wiki/${wordsearch}`
			},
			{
				name: 'Dictionary',
				imageurl:
					'https://www.dictionary.com/e/wp-content/uploads/2016/09/20200825_genericImage_Dcom_800x800-500x500.png',
				wordlink: `https://www.dictionary.com/browse/${wordsearch}`
			},
			{
				name: 'Cambridge',
				imageurl: 'https://beyondidiomas.com/wp-content/uploads/2019/03/cambridge_dictionary.jpg',
				wordlink: `https://dictionary.cambridge.org/dictionary/english/${wordsearch}`
			}
		];
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
			<h1 class="text-5xl font-bold">
				{wordefine}
			</h1>
			<div class="flex flex-row items-baseline">
				<button
					on:click={playaudio}
				>
					<img src={AudioIcon} alt="Audioicon" class="h-7 w-7"/>
				</button> <em class="font-normal text-base text-blue-600 mx-3 my-3">{phonetic.text}</em>
			</div>
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
									<p class="block text-base text-blue-700 dark:text-blue-600/60 italic pt-3">
										{def.example}
									</p>
								{/if}
							</li>
						{/each}
					</ul>
				</div>
			{/each}
			<!-- sources -->
			<div class="pt-5 flex flex-row justify-between">
				<h1 class="font-bold md:text-2xl italic text-xl">Sources</h1>
				<hr class="w-full md:w-[25cm] mx-2 border-1 border-blue-600 my-4" />
			</div>
			<div class="flex flex-row pt-3 space-x-3">
				{#each dictionaries as { name, imageurl, wordlink }}
					<a href={wordlink} target="_blank">
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
