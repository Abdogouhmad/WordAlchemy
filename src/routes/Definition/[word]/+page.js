/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const { word } = params;
	let define = '';

	// Make the API request here
	const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
	const data = await response.json();

	define = data[0]?.meanings[1]?.definitions[0]?.definition;
	console.log(JSON.stringify(define, null, 4));

	return {
		props: define
	};
}
