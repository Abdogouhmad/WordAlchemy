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
	<Navbar user={data.user} />
</header>
<div class="md:w-[700px] md:mx-auto lg:w-[700px] lg:mx-auto m-5">
	<slot />
</div>
