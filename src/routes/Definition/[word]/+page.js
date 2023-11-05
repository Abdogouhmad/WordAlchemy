function Meaning(data) {
	let dataparesed  = JSON.parse(JSON.stringify(data));
	if (dataparesed !== undefined) {
		let worddictionary = dataparesed[0]?.word;
		let partofspeech = dataparesed[0]?.meanings[0].partOfSpeech;
		let difine0 = dataparesed[0]?.meanings[0].definitions[0].definition;
		let difine1 = dataparesed[0]?.meanings[0].definitions[1].definition;
		let difine2 = dataparesed[0]?.meanings[0].definitions[2].definition;
		let example0 = dataparesed[0]?.meanings[0].definitions[0].example;
		let example1 = dataparesed[0]?.meanings[0].definitions[1].example;
		let example2 = dataparesed[0]?.meanings[0].definitions[2].example;

		return {
			partofspeech,
			worddictionary,
			difine0,
			difine1,
			difine2,
			example0,
			example1,
			example2,
		}
	} else {
		throw new Error('NO DATA NIGGA');
	}
}

export async function load({ fetch, params }) {
	let { word } = params;

	// Make the API request here
	let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
	let data = await response.json();
	// let dataparesed = JSON.parse(JSON.stringify(data));
	// let worddictionary = dataparesed[0]?.word;
	// let firstarr = dataparesed[0]?.meanings[0];
	// console.log(firstarr.meanings);
	let dataparesed = Meaning(data)

	return {
		dataparesed
		// firstarr, 
		// worddictionary
	};
}


