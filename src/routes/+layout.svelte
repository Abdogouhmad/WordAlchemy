<script>
	/** @type {import('./$types').LayoutData} */
	import '../app.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { Navbar } from '$lib';
	inject({ mode: dev ? 'development' : 'production' });

	export let data;
</script>

<header>
	<Navbar user={data} />
</header>

<slot />
