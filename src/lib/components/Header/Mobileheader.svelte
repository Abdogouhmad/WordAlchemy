<script>
	import { Hum } from '$lib';
	import Icon from '$lib/assets/Icon.svg';
	import Toggletheme from './Theme/selectheme.svelte';
	// import { Logoutform } from '$lib';

	export const route = [
		{
			name: 'Log in',
			href: '/auth/login'
		},
		{
			name: 'Sing Up',
			href: '/auth/register'
		}
	];
	export let isNavOpen = false;

	const toggleNavBar = () => {
		isNavOpen = !isNavOpen;
	};

	export const closeNavBar = () => {
		isNavOpen = false;
	};
</script>

<div class="flex items-center justify-between md:hidden p-3">
	<a href="/" class="flex items-start justify-start" on:click={closeNavBar}>
		<img src={Icon} class="h-7 w-7" alt="WordAlchemy Logo" />
		<span class="text-2xl font-semibold mx-2">WordAlchemy</span>
	</a>

	<button on:click={toggleNavBar} class="flex flex-col justify-between items-center md:hidden">
		<Hum open={isNavOpen} />
	</button>

	<div
		class={`bg-white dark:bg-black transition ${
			isNavOpen ? 'showFromRight' : '-translate-x-full'
		} fixed w-screen h-screen top-0 left-0 flex flex-col 
        justify-center items-center md:hidden z-[999]`}
	>
		<ul class="text-2xl flex flex-col space-y-5 font-medium">
			<!-- <a
					href="/"
					on:click={closeNavBar}
					class="hover:text-blue-600 hover:underline pt-1 font-bold text-2xl">Home</a
				>
				<a
					href="/auth/callback"
					on:click={closeNavBar}
					class="hover:text-blue-600 hover:underline pt-1 font-bold text-2xl">Profile</a
				>
				<Logoutform on:click={closeNavBar} /> -->

			<a
				href="/"
				on:click={closeNavBar}
				class="hover:text-blue-600 hover:underline pt-1 font-bold text-2xl">Home</a
			>
			{#each route as { name, href }}
				<button
					on:click={closeNavBar}
					class="dark:bg-blue-500/30 bg-blue-500/60 hover:bg-blue-700 dark:hover:bg-blue-700 text-base font-bold py-2 px-2 rounded"
				>
					<a {href}>{name}</a>
				</button>
			{/each}
		</ul>
		<div class="pt-3">
			<Toggletheme />
		</div>
	</div>
</div>
