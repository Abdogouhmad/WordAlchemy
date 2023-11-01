<script>
	import { onMount } from 'svelte';
	import { Catlookup } from '$lib';
	import lottie from 'lottie-web';
	let pageTitle = 'WordAlchemy';
	let pageDescription = 'Welcome to WordAlchemy';

	let lottieElement;

	onMount(() => {
		lottie.loadAnimation({
			container: lottieElement,
			loop: true,
			autoplay: true,
			animationData: Catlookup
		});
		return () => {
			lottieElement.destroy();
		};
	});
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
</svelte:head>

<section class="flex flex-col justify-center items-center">
	<div bind:this={lottieElement} class="md:h-[30vh] h-[200px] lg:h-[67vh]" />
	<h1 class="md:text-5xl font-bold">Weclome to WordAlchemy</h1>
</section>
