<script>
	/** @type {import('./$types').LayoutData} */
	import '../app.css';
	import { Navbar } from '$lib';
	import { DEngine } from '$lib';
	import { MEngine } from '$lib';
</script>

<header>
	<Navbar />
</header>
<section class="hidden md:flex md:justify-center md:flex-row pt-10">
	<DEngine />
</section>
<section class="pt-5">
	<MEngine />
</section>

<slot />
