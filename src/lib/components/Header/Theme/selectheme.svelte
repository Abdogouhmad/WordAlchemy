<script>
	import { Themestore } from '$lib';
	import { Toggletheme } from '$lib';
	import { Moon } from '$lib';
	import { Sun } from '$lib';

	const klass =
		'px-3 py-2 rounded-md leading-5 font-medium \
    focus:outline-none focus:text-white focus:bg-primary-300 \
    text-neutral-800 hover:text-white hover:bg-primary-300 \
    dark:text-white dark:hover:bg-primary-700 dark:focus:bg-primary-700 \
    dark:bg-black';
</script>

<div class="flex-0">
	<a
		href="/app/theme"
		class="block {klass}"
		aria-label="Toggle Light and Dark mode"
		on:click|preventDefault={() => {
			Toggletheme(Themestore, $Themestore);
		}}
	>
		<div class="hidden dark:block">
			<Sun />
		</div>
		<div class="dark:hidden">
			<Moon />
		</div>
	</a>
</div>
