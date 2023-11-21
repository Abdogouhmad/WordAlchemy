<script>
	/** @type {import('./$types').LayoutData} */
	import '../app.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { Navbar } from '$lib';
	import { DEngine } from '$lib';
	import { Authclient } from '$lib/supabase';

	console.log('Ur client:', Authclient ? 'no client' : 'no client');
	inject({ mode: dev ? 'development' : 'production' });
</script>

<header>
	<Navbar />
</header>

<section class="flex justify-center pt-10">
	<DEngine />
</section>
<slot />
