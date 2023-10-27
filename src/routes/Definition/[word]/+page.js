export async function load({ fetch, params }) {
	let { word } = params;

	// Make the API request here
	let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
	let data = await response.json();

	let define = data[0]?.meanings[1]?.definitions[0]?.definition;
	console.log('define: ' + JSON.stringify(define, null, 4));

	// Return the data as a prop
	return { define };
}
// #TODO: fix the props
