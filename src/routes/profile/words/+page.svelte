<script>
	export let data;
</script>

<section>
	<div
		class="max-w-lg mx-auto my-10 dark:border-blue-600/20 border border-blue-600/50 rounded-lg shadow-md p-5">
		<h2 class="text-center text-2xl font-semibold mt-3">{data.user.username}s' Words</h2>
	</div>
	<div
		class="max-w-lg mx-auto my-10 dark:border-blue-600/20 border border-blue-600/50 rounded-lg shadow-md p-5">
		<!-- ! the parent collection -->
		<div
			class="dark:bg-gray-800/20 dark:hover:bg-gray-800/30 rounded-lg border border-blue-600/50 hover:bg-gray-200/35 w-full">
			<!-- ! the child content -->
			<div class="p-3 flex-row">
				<h1 class="text-2xl font-semibold">Games</h1>
				<p class="text-gray-600">10 words</p>
			</div>
		</div>
	</div>
</section>
<!--TODO: build the collection and drop list -->
