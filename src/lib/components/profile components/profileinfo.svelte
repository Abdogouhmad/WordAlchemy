<script>
	export let data;
</script>

<section
	class=" dark:border-blue-600/30 border-blue-600/50 border rounded-lg shadow-md p-5 ">
	<h1 class="text-left text-2xl font-extrabold mt-3">{data.user.fullname}</h1>
	<h2 class="text-left text-gray-400 text-base md:text-2xl font-light">{data.user.username}</h2>
	<h2 class="text-left text-sm md:text-base  font-light text-gray-600">
		Member since: {data.user.createdAt.toDateString()}
	</h2>
	<h2 class="text-left text-sm md:text-base  font-light text-gray-600">
		Last Updated: {data.user.updatedAt.toDateString()}
	</h2>
	<h2 class="text-left text-sm font-light text-gray-600">{data.user.verified ? 'Verified' : 'Not Verified'}</h2>
	<h2 class="text-left text-sm font-light text-gray-600">{data.user.email}</h2>
	<hr class="border-0 bg-blue-600/50 my-3 h-px dark:bg-white/25 w-full" />
	<h2 class="font-semibold text-sm md:text-2xl">Bio</h2>
	<form action="?/bio" method="post" class="pt-3">
		<input
			type="text"
			maxlength="100"
			class="w-full p-5 bg-white border border-blue-600/30 dark:bg-gray-950 rounded-lg"
			placeholder="Enter your bio" />
	</form>
</section>