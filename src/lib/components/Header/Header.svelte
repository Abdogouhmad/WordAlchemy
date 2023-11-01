<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Icon from '$lib/assets/Icon.svg';
	// import Moon from '../UI/Moon.svelte';
	// import Sun from '../UI/Sun.svelte';
	const route = [
		{
			name: 'IPA',
			herf: '/Ipa'
		},
		{
			name: 'Wordlists',
			herf: '/Wordlists'
		},
		{
			name: 'Contact',
			herf: '/Contact'
		}
	];

	let darkMode;
	let darkModeReady = false;

	onMount(() => {
		darkMode = document.documentElement.classList.contains('dark');
		document.body.classList.add('transition', 'ease-in-out', 'duration-500');
		darkModeReady = true;
	});
</script>

<nav class="border-b-[1px] ">
	<div class="max-w-screen-xl flex items-center justify-between mx-auto p-3">
		<a href="/" class="flex items-start justify-start">
			<img src={Icon} class="h-8 mr-3" alt="WordAlchemy Logo" />
			<span class="text-2xl font-semibold">WordAlchemy</span>
		</a>
		<div class="hidden md:flex">
			<ul class=" text-2xl flex items-center space-x-5 flex-row font-medium">
				{#each route as item}
					<li>
						<a href={item.herf} class="hover:text-blue-600 hover:underline">
							{item.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
		{#if darkModeReady}
			<div class="h-8 toggle" in:fade={{ duration: 800 }}>
				<input
					type="checkbox"
					id="toggle"
					bind:checked={darkMode}
					on:change={() => document.documentElement.classList.toggle('dark')}
				/>
				<label
					id="darkicon"
					title="Toggle dark mode"
					for="toggle"
					data-dark={darkMode ? '🌒' : '🌞'}
				/>
			</div>
		{/if}
	</div>
</nav>

<style style lang="postcss">
	.toggle input[type='checkbox'] {
		display: none;
	}

	.toggle label {
		@apply inline-block cursor-pointer relative transition-all ease-in-out duration-300 w-12 h-6 rounded-3xl border border-solid border-gray-700 bg-yellow-100;
	}

	.toggle label::after {
		content: attr(data-dark);
		@apply flex items-center justify-center rounded-full cursor-pointer absolute top-px left-px transition-all ease-in-out duration-300 w-5 h-5 bg-transparent align-middle;
	}

	.toggle input[type='checkbox']:checked ~ label {
		@apply bg-gray-500;
	}

	.toggle input[type='checkbox']:checked ~ label::after {
		transform: translateX(24px);
	}
</style>
