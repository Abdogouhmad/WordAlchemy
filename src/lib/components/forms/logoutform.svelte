<script>
	import { enhance } from '$app/forms';

	const submitLogout = async () => {
		try {
			const response = await fetch('/auth/logout', { method: 'POST' });
			const data = await response.json();

			if (response.ok) {
				console.log('cool');
			} else {
				console.error(JSON.stringify(data.error));
			}
		} catch (error) {
			console.error('Error:', error);
		}
	};
</script>

<form method="POST" use:enhance={submitLogout} class="pt-5">
	<button type="submit" class="bg-blue-600 hover:bg-blue-800 p-2 rounded"> SING OUT </button>
</form>
