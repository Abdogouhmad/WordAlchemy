<script>
	import { onMount } from 'svelte';
	import { Caterror } from '$lib';
	import { page } from '$app/stores';
	import { dictionaries } from '$lib/data';

	let errorpage = $page.error?.message;
	const pageTitle = '404 Not found';
	const pageDescription = 'Page not found on WordAlchemy';
	let wordsearch, lottieElement;
	$: {
		wordsearch = $page.params.word;
	}
	onMount(() => {
		import('lottie-web').then((lottie) => {
			const animation = lottie.loadAnimation({
				container: lottieElement,
				loop: true,
				autoplay: true,
				animationData: Caterror
			});
			return () => {
				animation.destroy();
			};
		});
	});
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
</svelte:head>

<div class="flex items-center justify-center h-screen">
	<div class="flex flex-col items-center">
		<!-- <h1 class="font-bold text-6xl text-blue-500 lg:text-8xl">{$page.status}</h1> -->
		<div bind:this={lottieElement} class="md:h-[30vh] h-[200px] lg:h-[67vh]" />

		<h6 class="mb-2 text-2xl font-bold text-center md:text-4xl lg:text-6xl">
			<span class="text-red-500">Oops!</span> Definition {errorpage}
		</h6>

		<p class="mb-8 text-center md:text-lg lg:text-3xl">
			The word you’re looking for doesn’t exist in my dictionary yet.
		</p>
		<a
			href="/"
			class="px-6 py-2 text-base font-semibold text-black bg-blue-500 rounded-full hover:bg-blue-600"
			>Go home</a>
		<div class="flex flex-row pt-5 space-x-3">
			{#each dictionaries as { name, imageurl, wordlink }}
				<a href={wordlink + wordsearch} target="_blank">
					<img src={imageurl} alt={name} class="w-10 h-10 rounded-full" />
				</a>
			{/each}
		</div>
	</div>
</div>
