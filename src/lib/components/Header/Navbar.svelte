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
			<div class="space-x-3">
				{#if user}
					<button
						class="hover:text-gray-50 dark:hover:text-gray-900 border-2 border-blue-400 bg-blue-400 text-base font-bold py-1 px-2 rounded-lg">
						<a href="/collections">My collections</a>
					</button>

					<button
						on:click|preventDefault={async () => handleLogout()}
						class="hover:text-gray-900 dark:bg-blue-500/30 border-2 border-blue-400 bg-transparent hover:bg-blue-400 dark:hover:bg-blue-400 text-base font-bold py-1 px-2 rounded-lg">
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
			class="  md:hidden lg:hidden" />
	</div>
</nav>

<!-- burger menu -->

{#if open}
	<div
		class="m-3 dark:bg-gray-900 bg-gray-50 md:hidden lg:hidden space-y-3 p-3 border border-blue-300 rounded-lg flex flex-col items-center">
		{#if user}
			<button
				class="w-1/2 flex flex-col hover:text-gray-50 dark:hover:text-gray-900 border-2 border-blue-400 bg-blue-400 text-base font-bold py-1 px-2 rounded-lg">
				<a href="/collections">My collections</a>
			</button>

			<button
				on:click|preventDefault={async () => handleLogout()}
				class="w-1/2 flex flex-col hover:text-gray-900 dark:bg-blue-500/30 border-2 border-blue-400 bg-transparent hover:bg-blue-400 dark:hover:bg-blue-400 text-base font-bold py-1 px-2 rounded-lg">
				Logout
			</button>
		{/if}

		{#if !user}
			<AuthButtons mobile={true} />
		{/if}

		<Toggletheme />
	</div>
{/if}
