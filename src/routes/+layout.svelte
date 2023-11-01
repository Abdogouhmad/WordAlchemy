<script>
	/** @type {import('./$types').LayoutData} */
	import '../app.css';
	import { Navbar } from '$lib';
	import { DEngine } from '$lib';
</script>

<header>
	<Navbar />
</header>

<section class="flex justify-center pt-10">
	<DEngine />
</section>
<slot />
