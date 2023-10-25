<script>
	import SearchIcon from '$lib/assets/Vector.svg';
	const lang = [
		{
			label: 'English',
			value: 'en'
		},
		{
			label: 'Spanish',
			value: 'es'
		},
		{
			label: 'French',
			value: 'fr'
		}
	];
	const selectlang = 'Language';
	let word = '';
	const search = () => {
		console.log(JSON.stringify(word, null, 4));
	};
</script>

<section>
	<form class="flex" >
		<div class="">
			<button class="p-3 bg-blue-600 rounded-md text-center text-3xl text-white font-medium mr-4">
				{selectlang}
			</button>
		</div>
		<input
			type="text"
			bind:value={word}
			placeholder="Search for a word"
			class="w-full p-3  rounded-md bg-gray-300 text-black text-2xl font-light hover:bg-white border border-black hover:border-blue-600 mr-4"
		/>
		<button on:click={search} class="mt-2">
			<!-- Added margin-top for spacing -->
			<img src={SearchIcon} alt="searchicon" class="w-[80px] h-[50px]" />
		</button>
	</form>
</section>
