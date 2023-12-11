<script>
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	
	const submitLogout = async () => {
		const res = await fetch('/auth/logout', { method: 'PUT' });

		const data = res.json;

		console.log(data);

		goto('/');
	};
</script>

<form method="POST" use:enhance={submitLogout}>
	<button
		type="submit"
		class="dark:bg-blue-500/30 bg-blue-500/60 hover:bg-blue-700 dark:hover:bg-blue-700 text-base font-bold py-2 px-2 rounded"
	>
		Log out
	</button>
</form>
