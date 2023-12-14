<script>
	export let isNavOpen = false;
	export const closeNavBar = () => {
		isNavOpen = false;
		console.log('fromnavbutton: ', isNavOpen);
	};
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
</script>

{#each route as { name, href }}
	<button
		on:click={closeNavBar}
		class="dark:bg-blue-500/30 dark:border-none border-[1.5px] border-blue-500 hover:bg-blue-400 dark:hover:bg-blue-700 text-base font-bold py-2 px-2 rounded">
		<a {href}>{name}</a>
	</button>
{/each}
