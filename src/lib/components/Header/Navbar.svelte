<script>
	import Icon from '$lib/assets/Icon.svg';
	//import Mobilebar from './Mobileheader.svelte';
	import Toggletheme from './Theme/selectheme.svelte';
	import AuthButtons from './AuthButtons.svelte';
	import Error from '../../../routes/+error.svelte';
	import { goto } from '$app/navigation';
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

		goto('/login');
	}
</script>

<nav class="border-b-[1px] border-blue-600">
	<div class="max-w-screen-xl flex justify-between mx-auto p-3">
		<a href="/" class="flex items-start justify-start">
			<img src={Icon} class="h-7 w-7 mr" alt="WordAlchemy Logo" />
			<span class="text-2xl font-semibold">WordAlchemy</span>
		</a>

		<div class="flex space-x-10 items-center">
			{#if user}
				<button
					class="rounded-lg border-2 border-blue-700 dark:bg-blue-500/30 bg-blue-500/60 hover:bg-blue-700 dark:hover:bg-blue-700 text-base font-bold py-2 px-2"
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
	</div>
</nav>
