<script>
	import Icon from '$lib/assets/Icon.svg';
	import Toggletheme from './Theme/selectheme.svelte';
	import AuthButtons from './authbutton.svelte';
	import { Logoutbutton } from '$lib';
	import { browser } from '$app/environment';

	async function submitLogout() {
		const res = await fetch('/auth/logout', { method: 'PUT' });
		if (browser) {
			window.location.href = '/auth/login';
		}
	}
	import Hamburger from 'svelte-hamburger';

	export let user;

	export let open = false;

	const responsive =
		'md:w-[700px] m-3 md:mx-auto lg:w-[700px] lg:mx-auto rounded-2xl border border-blue-300';
</script>

<nav class="{responsive} dark:bg-gray-950 bg-gray-50">
	<div class="max-w-screen-xl flex justify-between items-center mx-auto p-3">
		<a href="/" class="flex items-start justify-start">
			<img src={Icon} class="h-7 w-7 mr" alt="WordAlchemy Logo" />
			<span class="text-2xl mx-2 font-semibold">WordAlchemy</span>
		</a>

		<div class="hidden md:flex space-x-10 items-center">
			<div class="space-x-4">
				{#if user}
					<button
						class=" dark:bg-blue-500/30
						border-[1.5px] border-blue-500
				hover:bg-blue-500/100
				dark:hover:bg-blue-700
				text-base
				font-bold
				py-2 px-2
				rounded
				">
						<a href="/profile">Profile</a>
					</button>
					<button
						on:click={submitLogout}
						class="dark:bg-blue-500/30 dark:hover:bg-red-600/90
					border-[1.5px] border-red-500 hover:border-none
					hover:bg-red-600/90 dark:hover:bg-blue-700 text-base font-bold py-2 px-2 rounded">
						Logout
					</button>
				{:else}
					<AuthButtons mobile={false} />
				{/if}
			</div>

			<Toggletheme />
		</div>

		<Hamburger
			--line-width="4px"
			{open}
			on:click={() => (open = !open)}
			class="  md:hidden lg:hidden" />
	</div>
</nav>

<!-- burger menu -->

{#if open}
	<div
		class="m-3 dark:bg-gray-950 bg-gray-50 md:hidden lg:hidden space-y-3 p-3 border border-blue-300 rounded-lg flex flex-col items-center">
		{#if user}
			<Logoutbutton />
		{/if}

		{#if !user}
			<AuthButtons mobile={true} />
		{/if}

		<Toggletheme />
	</div>
{/if}
