<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { Caterror } from '$lib';
	import lottie from 'lottie-web';
	let errorpage = $page.error?.message;
	const pageTitle = '404 Not found';
	const pageDescription = 'Page not found on WordAlchemy';
	let lottieElement;

	onMount(() => {
		lottie.loadAnimation({
			container: lottieElement,
			loop: true,
			autoplay: true,
			animationData: Caterror
		});

		return () => {
			// You can destroy the animation if needed when the component is unmounted
			lottieElement.destroy();
		};
	});
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
</svelte:head>

<div class="flex items-center justify-center h-screen">
	<div class="">
		<div class="flex flex-col items-center">
			<div class="md:h-[30vh] h-[200px] lg:h-[67vh] w-full" bind:this={lottieElement} />
			<h1 class="font-bold text-6xl text-blue-500 lg:text-8xl">{$page.status}</h1>

			<h6 class="mb-2 text-2xl font-bold text-center text-black md:text-4xl lg:text-6xl">
				<span class="text-red-500">Oops!</span> Page {errorpage}
			</h6>

			<p class="mb-8 text-center text-black md:text-lg lg:text-3xl">
				The page you’re looking for doesn’t exist.
			</p>

			<a
				href="/"
				class="px-6 py-2 text-base font-semibold text-black bg-blue-500 rounded-full hover:bg-blue-600"
				>Go home</a
			>
		</div>
	</div>
</div>
