<script>
	let year = new Date().getFullYear();
</script>

<footer class="foot">
	<div class="contain">
		<p>&copy; {year} <span class="text-blue-600/75">WordAlchemy</span>. All rights reserved.</p>
	</div>
</footer>

<style lang="postcss">
	.contain {
		@apply flex justify-center md:justify-start md:p-2;
	}
	.foot {
		@apply bottom-0  bg-white dark:bg-black;
	}
</style>
