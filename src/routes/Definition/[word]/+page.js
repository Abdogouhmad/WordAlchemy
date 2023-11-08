import { cleanarray, capturebestphonetics} from './funchelper.js';

export async function load({ fetch, params }) {
	let { word } = params;

	// Make the API request heres
	let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
	let data = await response.json();

	const myword = data[0]['word'];


	const phoneticsArray = capturebestphonetics(
		data[0]['phonetics'],
		data[0]['phonetic']
	);
	const MeaningArray = data[0]['meanings'].map((meaning) => {
		return cleanarray(meaning);
	});

	if (!phoneticsArray["text"] && data[0]["phonetic"]) {
		phoneticsArray["text"] = data[0]["phonetic"];
	  }
	
	console.log("from server phonetics --->",phoneticsArray);
	console.log('for server meaning --->',MeaningArray);


	return {
		word: myword,
		phonetics: phoneticsArray,
		meanings: MeaningArray
	};
}
