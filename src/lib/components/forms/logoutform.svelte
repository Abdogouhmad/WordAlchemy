<script>
	import { goto } from '$app/navigation';

	async function submitLogout() {
		const res = await fetch('/auth/logout', { method: 'PUT' });
		if (res.ok) {
			goto('/auth/login');
		}

	}
	
</script>

<button
	class="dark:bg-blue-500/30
	bg-blue-500/60 hover:bg-blue-500/100
	dark:hover:bg-blue-700
	text-base
	font-bold
	py-2 px-2
	rounded
	"
>
	<a href="/auth/login">Profile</a>
</button>
<button
	on:click={submitLogout}
	type="submit"
	class="dark:bg-blue-500/30 dark:hover:bg-red-600/90 bg-blue-500/60 hover:bg-red-600/90 dark:hover:bg-blue-700 text-base font-bold py-2 px-2 rounded"
>
	Log out
</button>
