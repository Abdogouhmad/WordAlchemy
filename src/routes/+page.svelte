<script>
	let pageTitle = 'WordAlchemy';
	let pageDescription = 'Welcome to WordAlchemy';
	import lottie from 'lottie-web';
	import { onMount } from 'svelte';
	import { Animatedbook } from '$lib';

	let animationContainer;

	onMount(() => {
		// Load and display the Lottie animation
		const animation = lottie.loadAnimation({
			container: animationContainer,
			loop: true, // Set to true if you want the animation to loop
			autoplay: true, // Set to true if you want the animation to play automatically
			animationData: Animatedbook // Replace with your Lottie animation data
		});

		return () => {
			// Cleanup when the component is unmounted
			animation.destroy();
		};
	});
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
</svelte:head>

<!-- <section class="flex justify-center pt-40 flex-row">
	<img src={logo} alt="worldalchemy logo" class="md:w-[700px] md:h-[140px] w-[300px] h-[100px]">
</section> -->

<!-- <section class="flex justify-center pt-40 ">
	<DEngine />
</section> -->

<section class="flex justify-center pt-20 flex-col">
	<h1 class="md:text-5xl lg:text-6xl text-2xl flex justify-center text-black font-black">
		Free web Dictionary
	</h1>
	<div bind:this={animationContainer} class="md:h-[30vh]  h-[200px]  lg:h-[67vh]" />
</section>
