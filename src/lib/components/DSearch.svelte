<script lang="ts">
	import SearchIcon from '$lib/assets/Vector.svg';
	const lang = ['English', 'Spanish', 'French'];
	let drop = false;
	const handllang = () => {
		drop = !drop;
	};
	let filteredItems = lang.slice(); // Copy the original language array
	let selectedlang = 'English';

	const selectinglang = (language: string) => {
		selectedlang = language;
		drop = false;
	};

	let word = '';
	const search = () => {
		console.log(JSON.stringify(word, null, 4));
	};
</script>

<section>
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
			class="w-full p-3 rounded-md bg-gray-100/100 text-black text-2xl font-light hover:bg-white border border-black hover:border-blue-600 mr-4"
		/>
		<button on:click={search} class="mt-2">
			<img src={SearchIcon} alt="searchicon" class="w-[80px] h-[50px]" />
		</button>
	</form>
</section>
