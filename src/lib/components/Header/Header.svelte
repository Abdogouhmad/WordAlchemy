<script>
	import Icon from '$lib/assets/Icon.svg';
	import Toggletheme from './Theme/selectheme.svelte';
	import AuthButtons from './authbutton.svelte';
	import { Logoutbutton } from '$lib';

	import Hamburger from 'svelte-hamburger';

	export let user;

	let open = false;

	const responsive =
		'md:w-[700px] m-3 md:mx-auto lg:w-[700px] lg:mx-auto rounded-2xl border border-blue-300';
</script>

<nav class="{responsive} dark:bg-black bg-gray-50">
	<div class="max-w-screen-xl flex justify-between items-center mx-auto p-3">
		<a href="/" class="flex items-start justify-start">
			<img src={Icon} class="h-7 w-7 mr" alt="WordAlchemy Logo" />
			<span class="text-2xl mx-2 font-Dhurjati">WordAlchemy</span>
		</a>

		<div class="hidden md:flex space-x-10 items-center">
			{#if user}
				<button
					class="rounded-lg border-2 border-blue-300 dark:bg-blue-500/30 bg-blue-500/60 hover:bg-blue-700 dark:hover:bg-blue-700 text-base font-bold py-2 px-2">
					<a href="/profile">Profile</a>
				</button>
			{/if}

			<div class="space-x-4">
				{#if user}
					<Logoutbutton />
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
		class="m-3 dark:bg-black bg-gray-50 md:hidden lg:hidden space-y-3 p-3 border border-blue-300 rounded-lg flex flex-col items-center">


		{#if user}
			<Logoutbutton />
		{/if}

		{#if !user}
			<AuthButtons mobile={true} />
		{/if}

		<Toggletheme />
	</div>
{/if}
