<script lang="ts">
	import SearchIcon from '$lib/assets/Vector.svg';
	import { goto } from '$app/navigation';

	// calling variables
	const lang = ['English', 'Spanish', 'French'];
	let drop = false;
	let filteredItems = lang.slice(); // Copy the original language array
	let selectedlang = 'English';
	let word = '';

	const handllang = () => {
		drop = !drop;
	};

	// function for selecting the lang
	const selectinglang = (language: string) => {
		selectedlang = language;
		drop = false;
	};

	const goword = () => {
		console.log(JSON.stringify(word, null, 4));
		goto(`/Definition/${word}`);
	};
</script>

<section class="flex justify-center flex-row">
	<form class="flex">
		<div class="relative">
			<button
				on:click={handllang}
				class="p-3 bg-blue-600 rounded-md text-center text-3xl text-white font-medium mr-4"
				aria-expanded={drop}
			>
				{selectedlang}
			</button>
			{#if drop}
				<div
					class="absolute mt-3 w-full left-0 p-2 bg-white border-blue-200 border rounded-md"
					aria-hidden={false}
				>
					{#each filteredItems as langItem (langItem)}
						<div
							on:click={() => selectinglang(langItem)}
							on:keydown={() => {}}
							class="cursor-pointer w-full hover:bg-blue-200 p-2 rounded-md"
							role="button"
							tabindex="0"
						>
							{langItem}
						</div>
					{/each}
				</div>
			{/if}
		</div>
		<input
			type="text"
			bind:value={word}
			placeholder="Search for a word"
			class="w-full  p-3 rounded-md bg-gray-100/100 text-black text-2xl font-medium hover:bg-white border border-black hover:border-blue-600 mr-4"
		/>
	</form>
	<button on:click={goword} class="relative right-3">
		<img src={SearchIcon} alt="searchicon" class="w-[80px] h-[50px]" />
	</button>
</section>
