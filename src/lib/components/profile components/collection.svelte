<script>
	import Icon from '@iconify/svelte';

	const data = ['Education', 'Politics', 'Work', 'Travel'];
</script>

<section
	class=" mx-auto md:w-[50%] dark:border-blue-600/30 border-blue-600/50 border space-y-5 rounded-lg shadow-md p-5">
	{#each data as header}
		<div
			class="dark:hover:bg-gray-900/60 p-2.5 border flex flex-row justify-between  border-blue-500/45 rounded-lg font-bold">
			{header}
			<div class="flex flex-row items-center space-x-2">
				<Icon icon="bitcoin-icons:edit-outline" width="25" height="25" class=" text-blue-600 " />
				<Icon icon="material-symbols:delete-outline" width="25" height="25" class="text-red-500  " />
			</div>

		</div>
	{/each}
</section>