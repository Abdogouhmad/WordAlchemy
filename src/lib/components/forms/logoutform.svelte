<script>
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	const submitLogout = async ({ cancel }) => {
		const response = await fetch('/auth/logout', { method: 'POST' });
		const data = await response.json();

		if (response.ok) {
			await goto('/');
			console.log('cool');
		} else {
			console.error(data.error);
		}

		cancel();
	};
</script>

<form method="POST" use:enhance={submitLogout} class="pt-5">
	<button type="submit" class="bg-blue-600 hover:bg-blue-800 p-2 rounded  "> SING OUT </button>
</form>
