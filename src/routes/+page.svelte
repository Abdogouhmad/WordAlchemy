<script>
    let pageTitle = 'WordAlchemy';
    let pageDescription = 'Welcome to WordAlchemy';
	import logo from '$lib/assets/wordalchemy.svg';
	import { DEngine } from '$lib';
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
</svelte:head>

<section class="flex justify-center pt-40 flex-row">
	<img src={logo} alt="worldalchemy logo" class="md:w-[700px] md:h-[140px] w-[300px] h-[100px]">
</section>

<section class="flex justify-center pt-40 ">
	<DEngine />
</section>