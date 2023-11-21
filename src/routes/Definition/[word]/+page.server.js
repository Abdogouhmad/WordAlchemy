import { cleanarray, capturebestphonetics } from './funchelper.js';
import { error } from '@sveltejs/kit';

/**
 * Loads data from an API using the provided fetch function and parameters.
 *
 * @param {Object} options - The options object.
 * @param {Function} options.fetch - The fetch function used to make the API request.
 * @param {Object} options.params - The parameters object.
 * @param {string} options.params.word - The word to be used in the API request.
 * @returns {Object} An object containing the word, phonetics, and meanings.
 * @throws {Error} If the API request fails or returns a status code of 404.
 */


export async function load({ fetch, params }) {
	let { word } = params;
	try {
		// Make the API request heres
		let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
		let data = await response.json();
		const myword = data[0]['word'];

		const phoneticsArray = capturebestphonetics(data[0]['phonetics'], data[0]['phonetic']);
		const MeaningArray = data[0]['meanings'].map((meaning) => {
			return cleanarray(meaning);
		});

		console.log('from server phonetics --->', phoneticsArray);
		console.log('for server meaning --->', MeaningArray);

		return {
			word: myword,
			phonetics: phoneticsArray,
			meanings: MeaningArray
		};
	} catch (e) {
		throw error(404, 'Not found');
	}
}
