<script>
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
		class="dark:bg-blue-500/30 bg-blue-500/60 hover:bg-blue-700 dark:hover:bg-blue-700 text-base font-bold py-2 px-2 rounded"
	>
		<a {href}>{name}</a>
	</button>
{/each}
