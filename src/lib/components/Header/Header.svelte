<script>
	import Icon from '$lib/assets/Icon.svg';
	import Selectheme from './Theme/selectheme.svelte';
</script>

<nav class="border-b-[1px] bg-[#FCFCFC] border-gray-900">
	<div class="max-w-screen-xl flex items-center justify-between mx-auto p-3">
		<a href="/" class="flex items-start justify-start">
			<img src={Icon} class="h-8 mr-3" alt="WordAlchemy Logo" />
			<span class="text-2xl font-semibold text-black">WordAlchemy</span>
		</a>
		<div class="hidden md:flex">
			<ul class="text-black text-2xl flex items-center space-x-5 font-medium">
				<li>
					<a href="/Ipa" class="hover:border-b-2 hover:border-b-blue-500"> IPA</a>
				</li>
				<li>
					<a href="/Wordlists" class="hover:border-b-2 hover:border-b-blue-500"> Wordlists</a>
				</li>
				<li>
					<a href="/Contact" class="hover:border-b-2 hover:border-b-blue-500">contact</a>
				</li>
			</ul>
		</div>
		<Selectheme />
	</div>
</nav>
