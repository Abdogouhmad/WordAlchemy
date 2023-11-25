<script>
	/** @type {import('./$types').LayoutData} */
	import '../app.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { Navbar } from '$lib';
	import { DEngine } from '$lib';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
	});

	inject({ mode: dev ? 'development' : 'production' });
</script>

<header>
	<Navbar {data} />
</header>

<section class="flex justify-center pt-10">
	<DEngine />
</section>
<slot />
