function Meaning(data) {
	let dataparesed = JSON.parse(JSON.stringify(data));
	if (dataparesed !== undefined) {
		let i;
		for (i = 0; i < dataparesed[0]?.meanings.length; i++) {
			if (dataparesed[0]?.meanings.length <= 0) {
				return {
					undefined
				};
			}
			return {
				puredefine: dataparesed[i]?.meanings[i].definitions[i].definition,
				partofspeech: dataparesed[i]?.meanings[i].partOfSpeech,
				wordtobedefine: dataparesed[i]?.word,
				example: dataparesed[i]?.meanings[i].definitions[i].example
			};
		}
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
