<script>
	import { browser } from '$app/environment';

	async function submitLogout() {
		const res = await fetch('/auth/logout', { method: 'PUT' });
		if (browser) {
			window.location.href = '/auth/login';
		}
	}
</script>

<button
	class="w-1/2 dark:bg-blue-500/30
	border-[1.5px] border-blue-500
	hover:bg-blue-500/100
	dark:hover:bg-blue-700
	text-base
	font-bold
	py-2 px-2
	rounded
	">
	<a href="/profile">Profile</a>
</button>
<button
	on:click={submitLogout}
	type="submit"
	class="w-1/2 dark:bg-blue-500/30 dark:hover:bg-red-600/90
	border-[1.5px] border-red-500 hover:border-none
	hover:bg-red-600/90 dark:hover:bg-blue-700 text-base font-bold py-2 px-2 rounded">
	Log out
</button>
