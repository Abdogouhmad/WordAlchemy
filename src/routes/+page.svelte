<script>
	let welcome = 'welcome to WordAlchemy';
    let pageTitle = 'WordAlchemy';
    let pageDescription = 'Welcome to WordAlchemy';
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
</svelte:head>

<main class="pt-20">
	<h1 class="text-5xl flex justify-center text-blue-600 font-black">{welcome}</h1>
</main>
