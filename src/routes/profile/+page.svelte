<script>
	import { CollectionWords, Userprofile } from '$lib';

	export let data;

</script>

<article class="space-y-5 md:flex md:flex-row ">
	<!-- ! for the visual profile	-->
	<Userprofile {data} />
	<!--	for collection and drop list	-->
	<CollectionWords />
</article>
