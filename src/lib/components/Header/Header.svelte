<script>
	import Icon from '$lib/assets/Icon.svg';
	//import Mobilebar from './Mobileheader.svelte';
	import Toggletheme from './Theme/selectheme.svelte';
	import AuthButtons from './AuthButtons.svelte';
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
</script>

<nav class="border-b-[1px] border-blue-600">
	<div class="max-w-screen-xl flex justify-between mx-auto p-3">
		<a href="/" class="flex items-start justify-start">
			<img src={Icon} class="h-7 w-7 mr" alt="WordAlchemy Logo" />
			<span class="text-2xl font-semibold">WordAlchemy</span>
		</a>

		<div class="flex space-x-10 items-center">
			<div class="space-x-4">
				{#if true}
					<AuthButtons />
				{:else}
					<button
						class="dark:bg-blue-500/30 bg-blue-500/60 hover:bg-blue-700 dark:hover:bg-blue-700 text-base font-bold py-2 px-2 rounded"
						>logout</button
					>
				{/if}
			</div>

			<Toggletheme />
		</div>
	</div>
</nav>
