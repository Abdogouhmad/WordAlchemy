<script>
	import { UpdateUser } from '$lib';
	export let form;
	export let data;
</script>

{#if data?.ValidToken}
	<UpdateUser {form} />
{:else}
	<h1 class="text-center bg-red-600 text-4xl font-Dhurjati">Invalid Link try again</h1>
{/if}
