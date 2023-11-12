<script>
	import { page } from '$app/stores';
	let errorpage = $page.error?.message;
	const pageTitle = '404 Not found';
	const pageDescription = 'Page not found on WordAlchemy';
	let dictionaries, wordsearch;
	$: {
		wordsearch = $page.params.word;
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
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
</svelte:head>

<div class="flex items-center justify-center h-screen">
	<div class="flex flex-col items-center">
		<h1 class="font-bold text-6xl text-blue-500 lg:text-8xl">{$page.status}</h1>

		<h6 class="mb-2 text-2xl font-bold text-center text-black md:text-4xl lg:text-6xl">
			<span class="text-red-500">Oops!</span> Definition {errorpage}
		</h6>

		<p class="mb-8 text-center text-black md:text-lg lg:text-3xl">
			The word you’re looking for doesn’t exist in my dictionary yet.
		</p>
		<a
			href="/"
			class="px-6 py-2 text-base font-semibold text-black bg-blue-500 rounded-full hover:bg-blue-600"
			>Go home</a
		>
		<div class="flex flex-row pt-5 space-x-3">
			{#each dictionaries as { name, imageurl, wordlink }}
				<a href={wordlink} target="_blank">
					<img src={imageurl} alt={name} class="w-10 h-10 rounded-full" />
				</a>
			{/each}
		</div>
	</div>

</div>
