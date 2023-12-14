<script>
	let isOpen = false;

	const responsive = 'md:w-[500px] md:mx-auto lg:w-1/2 lg:mx-auto rounded-lg';
</script>

<button
	on:click={() => (isOpen = !isOpen)}
	class="w-full {responsive} flex justify-center border border-red-600"
>
	collection
</button>

{#if isOpen}
	<ul class="space-y-2 flex flex-col">
		<li class="{responsive} px-4 mt-4 rounded-lg flex justify-between border border-blue-600">
			<span>word 1</span>

			<div>
				<button>expand</button>
			</div>
		</li>
		<li class="{responsive} rounded-lg flex justify-center border border-blue-600">word 2</li>
		<li class="{responsive} rounded-lg flex justify-center border border-blue-600">word 3</li>
	</ul>
{/if}
