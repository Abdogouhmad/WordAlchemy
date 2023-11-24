<script>
	import Icon from '$lib/assets/Icon.svg';
	import Mobileheader from './Mobileheader.svelte';
	import Toggletheme from './Theme/selectheme.svelte';

	export const route = [
		{
			name: 'Login',
			href: '/auth/login'
		},
		{
			name: 'Sign Up',
			href: '/auth/register'
		},
		{
			name: 'Profile',
			href: '/auth/callback'
		}
	];
</script>

<nav class="md:border-b-[1px] md:border-blue-600/25 md:dark:border-b-0">
	<div class="hidden sm:flex max-w-screen-xl justify-between mx-auto p-3">
		<a href="/" class="flex items-start justify-start">
			<img src={Icon} class="h-7 w-7" alt="WordAlchemy Logo" />
			<span class="text-2xl font-semibold mx-2">WordAlchemy</span>
		</a>

		<div class="flex">
			<ul class="text-2xl flex space-x-5 flex-row font-medium">
				{#each route as item}
					<li>
						<a href={item.href} class="hover:text-blue-600 hover:underline">
							{item.name}
						</a>
					</li>
				{/each}
			</ul>

			<Toggletheme />
		</div>
	</div>
	<Mobileheader />

</nav>
