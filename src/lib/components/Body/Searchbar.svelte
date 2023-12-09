<script>
	// import SearchIcon from '$lib/assets/Vector.svg';
	import { goto } from '$app/navigation';
	export let word = '';

	export const search = () => {
		console.log('Word you are Looking for:', word);
		goto(`/define/${word}`);
	};
</script>

<form on:submit|preventDefault={search}>
	<div class="relative">
		<input
			type="text"
			bind:value={word}
			class=" w-80 md:w-96 lg:w-[600px] p-5 pl-5 text-sm text-gray-900 border
			border-blue-200 rounded-md bg-gray-100
			hover:border-blue-700
			dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white
			dark:hover:border-blue-700 "
			placeholder="Search for a word..."
			aria-label='Search input'
			required
		/>
		<button
			type="submit"
			class="text-white absolute right-3.5 bottom-3.5 bg-blue-500 hover:bg-blue-700
        	font-medium rounded-lg text-sm px-4 py-2
            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:border-blue-800">Search</button
		>
	</div>
</form>
