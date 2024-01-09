<script>
	import { DEngine } from '$lib';
	import { onMount } from 'svelte';
	import { Catlookup } from '$lib';

	let pageTitle = 'WordAlchemy';
	let pageDescription = 'Welcome to WordAlchemy';

	let lottieElement;

	onMount(() => {
		import('lottie-web').then((lottie) => {
			// Load and display the Lottie animation
			const animation = lottie.loadAnimation({
				container: lottieElement,
				loop: true, // Set to true if you want the animation to loop
				autoplay: true, // Set to true if you want the animation to play automatically
				animationData: Catlookup // Replace with your Lottie animation data
			});

			return () => {
				// Cleanup when the component is unmounted
				animation.destroy();
			};
		});
	});
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
</svelte:head>

<section class="flex flex-col items-center">
	<div bind:this={lottieElement} class="md:h-[40vh] h-[300px] lg:h-[67vh]" />
	<!-- the search componante -->
	<DEngine />
</section>
