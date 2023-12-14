<script>
	import { onMount } from 'svelte';
	import { Catlookup, DEngine } from '$lib';
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

<section class=" flex flex-col justify-center items-center">
	<div class="w-full flex h-40 items-end pt-10">
		<DEngine />
	</div>

	<div class="mb-4">
		<div bind:this={lottieElement} class="md:h-[30vh] h-[200px] lg:h-[67vh]" />
		<h1 class="md:text-5xl text-2xl pt-5 font-mono">Welcome to WordAlchemy</h1>
	</div>
	<!-- <p class="md:text-3xl text-base font-light p-3 pt-3 text-center">
		WordAlchemy: Your ad-free dictionary web app. Explore words without interruptions, all for free
	</p> -->
</section>
