function Meaning(data) {
	let dataparesed = JSON.parse(JSON.stringify(data));
	if (dataparesed !== undefined) {
		let worddictionary = dataparesed[0]?.word;
		let partofspeech = dataparesed[0]?.meanings[0].partOfSpeech;
		// let difine0 = dataparesed[0]?.meanings[0].definitions[0].definition;
		let example0 = dataparesed[0]?.meanings[0].definitions[0].example;

		let i;
		for (i = 0; i < dataparesed[0]?.meanings.length; i++) {
			if (dataparesed[0]?.meanings.length <= 0) {
				return {
					undefined
				};
			}
			return {
				puredefine: dataparesed[i]?.meanings[i].definitions
			};
		}

		return {
			partofspeech,
			worddictionary,
			// difine0,
			example0
		};
	} else {
		throw new Error('NO DATA NIGGA');
	}
}

export async function load({ fetch, params }) {
	let { word } = params;

	// Make the API request heres
	let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
	let data = await response.json();

	let dataparesed = Meaning(data);

	return {
		dataparesed
	};
}
