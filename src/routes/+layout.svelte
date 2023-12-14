<script>
	/** @type {import('./$types').LayoutData} */
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	import '../app.css';
	import { Navbar } from '$lib';
	import { DEngine } from '$lib';

	inject({ mode: dev ? 'development' : 'production' });

	export let data;

	const responsive =
		'md:w-[700px] m-3 md:mx-auto lg:w-[700px] lg:mx-auto rounded-2xl border border-blue-300 min-h-screen';
</script>

<header>
	<Navbar user={data.user} />
</header>

<div class={responsive}>
	<slot />
</div>
