<script>
	import { enhance } from '$app/forms';

	const submitLogout = async () => {
		try {
			const response = await fetch('/auth/logout', { method: 'POST' });
			const data = await response.json();

			if (response.ok) {
				console.log('bye');
			} else {
				console.error(JSON.stringify(data.error));
			}
		} catch (error) {
			console.error('Error:', error);
		}
	};
</script>

<form method="POST" use:enhance={submitLogout} >
	<button
		type="submit"
		class="dark:bg-blue-500/30 bg-blue-500/60 hover:bg-blue-700 dark:hover:bg-blue-700 text-base font-bold py-2 px-2 rounded"
	>
		Log out
	</button>
</form>
