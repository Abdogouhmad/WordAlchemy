<script lang="ts">
	export let word = '';
	import SearchIcon from '$lib/assets/Vector.svg';
	import { goto } from '$app/navigation';
	export const lang = ['English', 'Spanish', 'French'];
	export let drop = false;
	export let filteredItems = lang.slice();
	export let selectedlang = 'English';
	export const handllang = () => {
		drop = !drop;
	};
	export const selectinglang = (language: string) => {
		selectedlang = language;
		drop = false;
	};
	export const goword = () => {
		console.log(JSON.stringify(word, null, 4));
		goto(`/Definition/${word}`);
	};
</script>

<div class="md:hidden flex justify-center flex-row p-3">
	<form class="flex">
		<div class="relative">
			<button
				on:click={handllang}
				class="p-[14px] bg-blue-600 rounded-md text-center text-md text-white font-medium mr-4"
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
			class="w-full p-[8px] rounded-md bg-gray-100/100 text-black text-md font-medium hover:bg-white border hover:border-blue-600 mr-4"
		/>
	</form>
	<button on:click={goword} class="relative left-[4px]">
		<img src={SearchIcon} alt="searchicon" class="w-[50px] h-[50px]" />
	</button>
</div>
