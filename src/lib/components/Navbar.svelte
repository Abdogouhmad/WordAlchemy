<script>
    import Icon from "$lib/assets/Icon.svg";
</script>

<nav class="border-b-[1px] border-gray-900">
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
		<a href="/" class="flex items-center">
			<img src={Icon} class="h-8 mr-3" alt="WordAlchemy Logo" />
			<span class="self-center text-2xl font-semibold whitespace-nowrap text-black"
				>WordAlchemy</span
			>
		</a>
        <div class="hidden md:flex items-center mx-10 ">
            <ul class="text-black  text-2xl flex items-center space-x-10 font-medium ">
                <li>
                    <a href="/" class="hover:border-b-2 hover:border-b-blue-600"> Dictionaries</a>
                </li>
                <li>
                    <a href="/ipa" class="hover:border-b-2 hover:border-b-blue-600"> IPA</a>
                </li>
                <li>
                    <a href="/wordlist" class="hover:border-b-2 hover:border-b-blue-600"> Wordlists</a>
                </li>
                <li>
                    <a href="/Contact" class="hover:border-b-2 hover:border-b-blue-600">contact</a>
                </li>
            </ul>
        </div>
	</div>
</nav>
