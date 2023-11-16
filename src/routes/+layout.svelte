<script>
	/** @type {import('./$types').LayoutData} */
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	import '../app.css';
	import { Navbar } from '$lib';
	import { DEngine } from '$lib';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<header>
	<Navbar />
</header>

<section class="flex justify-center pt-10">
	<DEngine />
</section>
<slot />
