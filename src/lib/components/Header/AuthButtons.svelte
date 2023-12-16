<script>
	export let isNavOpen = false;
	export const closeNavBar = () => {
		isNavOpen = false;
		console.log('fromnavbutton: ', isNavOpen);
	};

	export let mobile;
	let mobileStyle = mobile ? 'w-1/2 flex flex-col' : '';
</script>

<button
	on:click={closeNavBar}
	class="{mobileStyle} hover:text-gray-50 dark:hover:text-gray-900 border-2 border-blue-400 bg-blue-400 text-base font-bold py-1 px-2 rounded-lg">
	<a href="/login">Log in</a>
</button>
<button
	on:click={closeNavBar}
	class="{mobileStyle} hover:text-gray-900 dark:bg-blue-500/30 border-2 border-blue-400 bg-transparent hover:bg-blue-400 dark:hover:bg-blue-400 text-base font-bold py-1 px-2 rounded-lg">
	<a href="/register">Sign Up</a>
</button>
