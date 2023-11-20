<script>
	import Icon from '$lib/assets/Icon.svg';
	//import Mobilebar from './Mobileheader.svelte';
	import Toggletheme from './Theme/selectheme.svelte';
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

<nav class="border-b-[1px]">
	<div class="max-w-screen-xl flex  justify-between mx-auto p-3">
		<a href="/" class="flex items-start justify-start">
			<img src={Icon} class="h-7 w-7 mr" alt="WordAlchemy Logo" />
			<span class="text-2xl font-semibold">WordAlchemy</span>
		</a>
		<!-- <div class="hidden md:flex">
			<ul class=" text-2xl flex  space-x-5 flex-row font-medium">
				{#each route as item}
					<li>
						<a href={item.herf} class="hover:text-blue-600 hover:underline">
							{item.name}
						</a>
					</li>
				{/each}
			</ul>
		</div> -->
		<Toggletheme  />
	</div>
	
</nav>
