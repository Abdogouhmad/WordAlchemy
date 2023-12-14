<script>
	import Icon from '$lib/assets/Icon.svg';
	//import Mobilebar from './Mobileheader.svelte';
	import Toggletheme from './Theme/SelecTheme.svelte';
	import AuthButtons from './AuthButtons.svelte';
	import Error from '../../../routes/+error.svelte';
	import { goto } from '$app/navigation';

	import { browser } from '$app/environment';

	import Hamburger from 'svelte-hamburger';

	export const route = [
		{
			name: 'IPA',
			herf: '/Ipa'
		},
		{
			name: 'Contact',
			herf: '/Contact'
		}
	];

	export let user;

	async function handleLogout() {
		const res = await fetch('/api/auth/logout', { method: 'PUT' });

		const data = res.json;

		console.log(data);

		if (browser) {
			// to prevent error window is not defined, because it's SSR
			window.location.href = '/login';
		}
	}

	let isBurgerOpen = true;
	let open = false;

	const responsive =
		'md:w-[700px] m-3 md:mx-auto lg:w-[700px] lg:mx-auto rounded-2xl border border-blue-300';
</script>

<nav class="{responsive} dark:bg-gray-900 bg-gray-50">
	<div class="max-w-screen-xl flex justify-between items-center mx-auto p-3">
		<a href="/" class="flex items-start justify-start">
			<img src={Icon} class="h-7 w-7 mr" alt="WordAlchemy Logo" />
			<span class="text-2xl font-semibold">WordAlchemy</span>
		</a>

		<div class="hidden md:flex space-x-10 items-center">
			{#if user}
				<button
					class="rounded-lg border-2 border-blue-300 dark:bg-blue-500/30 bg-blue-500/60 hover:bg-blue-700 dark:hover:bg-blue-700 text-base font-bold py-2 px-2"
				>
					<a href="/collections">My collections</a>
				</button>
			{/if}

			<div class="space-x-4">
				{#if user}
					<button
						on:click|preventDefault={async () => handleLogout()}
						class="dark:bg-blue-500/30 bg-blue-500/60 hover:bg-blue-700 dark:hover:bg-blue-700 text-base font-bold py-2 px-2 rounded"
					>
						Logout
					</button>
				{:else}
					<AuthButtons />
				{/if}
			</div>

			<Toggletheme />
		</div>

		<Hamburger
			--line-width="4px"
			{open}
			on:click={() => (open = !open)}
			class="  md:hidden lg:hidden"
		/>
	</div>
</nav>

<!-- burger menu -->

{#if open}
	<div
		class="m-3 dark:bg-gray-900 bg-gray-50 md:hidden lg:hidden space-y-3 p-3 border border-blue-300 rounded-lg flex flex-col items-center"
	>
		{#if user}
			<button
				class="w-1/2 rounded-lg border-2 border-blue-400 dark:bg-transparent dark:hover:bg-blue-400 hover:text-white text-base font-bold py-2 px-2"
			>
				<a href="/collections">My collections</a>
			</button>
		{/if}

		{#if user}
			<button
				on:click|preventDefault={async () => handleLogout()}
				class="w-1/2 border-blue-400 dark:bg-blue-400 dark:hover:bg-blue-400 dark:hover:bg-blue-700 text-base font-bold py-2 px-2 rounded"
			>
				Logout
			</button>
		{/if}

		{#if !user}
			<AuthButtons mobile={true} />
		{/if}

		<Toggletheme />
	</div>
{/if}
