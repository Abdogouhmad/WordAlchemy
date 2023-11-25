<script>
	import { Hum } from '$lib';
	import Icon from '$lib/assets/Icon.svg';
	import Toggletheme from './Theme/selectheme.svelte';
	import Cbutton from './navbutton.svelte';
	import { Logoutform } from '$lib';

	let isNavOpen = false;
	export let data;

	const toggleNavBar = () => {
		isNavOpen = !isNavOpen;
	};

	const closeNavBar = () => {
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
		class={`bg-white dark:bg-black transition-transform ${
			isNavOpen ? 'showFromRight' : '-translate-x-full'
		} fixed w-screen h-screen top-0 left-0 flex flex-col justify-center items-center md:hidden z-[999]`}
	>
		<ul class="text-2xl flex flex-col space-y-5 font-medium">
			{#if data.session}
				<a href="/" class="hover:text-blue-600 hover:underline pt-1 font-bold text-2xl">Home</a>
				<a href="/auth/callback" class="hover:text-blue-600 hover:underline pt-1 font-bold text-2xl"
					>Profile</a
				>
				<Logoutform />
			{:else}
				<a href="/" class="hover:text-blue-600 hover:underline pt-1 font-bold text-2xl">Home</a>
				<a href="/auth/callback" class="hover:text-blue-600 hover:underline pt-1 font-bold text-2xl"
					>Profile</a
				>
				<Cbutton />
			{/if}
		</ul>
		<div class="pt-3">
			<Toggletheme />
		</div>
	</div>
</div>

<!-- {#each route as item}
				<li>
					<a
						href={item.href}
						on:click={closeNavBar}
						class=" text-lg hover:text-blue-600 hover:underline"
					>
						{item.name}
					</a>

				</li>
{/each} -->
