<script>
	import { Meaning } from '$lib';

	export let data;
	$: phonetic = data?.phonetics;
	$: wordefine = data?.word;
	$: audioSource = data?.phonetics.audio;

	const playaudio = () => {
		if (audioSource) {
			const audio = new Audio(audioSource);
			audio.play();
		} else {
			alert('No audio available for this word');
		}
	};

	let wordsearch = '';
	let pagetitle = '';
	let description = '';

	$: {
		wordsearch = wordefine;
		pagetitle = `WordAlchemy | Definition of ${wordsearch}`;
		description = `Definition page of ${wordsearch}`;
	}
</script>

<svelte:head>
	<title>{pagetitle}</title>
	<meta name="description" content={description} />
</svelte:head>

<Meaning {wordsearch} {phonetic} {audioSource} on:playaudio={playaudio} {data} />
