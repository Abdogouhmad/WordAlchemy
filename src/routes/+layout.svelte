<script>
	/** @type {import('./$types').LayoutData} */
	import '../app.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { Navbar } from '$lib';
	import { DEngine } from '$lib';
	import supabase from './supabase';


	console.log('Ur client:', supabase ? 'no client' : 'no client');
	inject({ mode: dev ? 'development' : 'production' });
</script>

<header>
	<Navbar />
</header>

<section class="flex justify-center pt-10">
	<DEngine />
</section>
<slot />
