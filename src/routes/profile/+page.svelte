<script>
	export let data;
</script>

<section>
	<div class="max-w-lg mx-auto my-10 dark:border-blue-600/20 border rounded-lg shadow-md p-5">
		<h2 class="text-center text-2xl font-semibold mt-3">{data.user.username}</h2>
		<p class="text-center text-gray-600 mt-1">Software Engineer</p>
		<div class="mt-5">
			<h3 class="text-xl font-semibold">Bio</h3>
			<p class="text-gray-600 mt-2">
				John is a software engineer with over 10 years of experience in developing web and mobile
				applications. He is skilled in JavaScript, React, and Node.js.
			</p>
		</div>
	</div>
</section>
