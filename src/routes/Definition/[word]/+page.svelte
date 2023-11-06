<script>
	// import audio from '$lib/assets/audio.svg';
	// import { page } from '$app/stores';

	export let data;
	$: define = data?.dataparesed?.puredefine || 'no definition found';
	$: partspch = data?.dataparesed?.partofspeech;
	$: wordifne = data?.dataparesed?.wordtobedefine;
	$: examples = data?.dataparesed?.example || 'no example found';
	$: {
		console.log(data);
	}

	let pagetitle = `Definition of ${wordifne}`;
	let description = `Definition page of  ${wordifne}`;
</script>

<svelte:head>
	<title>{pagetitle}</title>
	<meta name="description" content={description} />
</svelte:head>

<div class=" font-light justify-center flex pt-5 text-justify text-sm">
	<p>
		Definition of <b class="font-bold text-blue-400">{wordifne}</b> From The WordAlchemy's Dictionary
	</p>
</div>

<section class="@container flex flex-col">
	<!-- * top container -->
	{#if data}
		<div class="flex md:items-center p-10 flex-col">
			<!-- align to left -->
			<h1 class="text-5xl font-bold">
				{wordifne} <em class="font-normal text-base text-blue-600">{partspch}</em>
			</h1>
			<div class="pt-5 flex flex-row justify-between">
				<h1 class="font-bold md:text-2xl italic text-lg">{partspch}</h1>
				<hr class="w-[10cm] md:w-[20cm] mx-2 border-1 md:my-5 my-3" />
			</div>
			<!-- !meaning section -->
			<div>
				<h2 class="md:text-2xl pt-4 text-base font-semibold italic">Meaning</h2>
				<ul class="pt-5 text-justify text-sm md:text-base font-medium list-disc list-inside">
						<li class="text-base md:text-center leading-relaxed">
							{#if define}
								{define}
								{#if examples && examples.length > 0}
									<q class="block text-sm text-[#979797] italic pt-2">{examples}</q>
								{/if}
							{/if}
						</li>
				</ul>
			</div>

			<!-- 
			<p class=" text-justify text-sm md:text-base pt-5 font-medium">
				{#each define as def}
					{def}
				{/each}
			</p> -->
		</div>
	{:else}
		<div class="pt-10">
			<h1 class="text-center justify-center flex text-6xl text-red-600">
				No definition for the word: <b>{wordifne}</b>
			</h1>
		</div>
	{/if}
</section>
