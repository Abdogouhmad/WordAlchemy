/**
 * Cleans an array by removing any empty arrays and returning the cleaned data.
 *
 * @param {array} array - The array to be cleaned.
 * @return {array} The cleaned array.
 */
export const cleanarray = (array) => {
	const cleardata = JSON.parse(
		JSON.stringify(array, (key, value) => {
			if (Array.isArray(value) && value.length === 0) {
				return undefined;
			}
			return value;
		})
	);
	return cleardata;
};

// capture best phonetic and phonetics

/**
 * Generates a function comment for the given function body.
 *
 * @param {Array} phoneticsArray - The array of phonetics.
 * @param {string} ipa - The IPA value.
 * @return {Object} The matched phonetic object.
 */
export const capturebestphonetics = (phoneticsArray, ipa) => {
	const match = {};

	if (ipa) {
		match['text'] = ipa;
	}

	for (let phonetic of phoneticsArray) {
		if (phonetic?.text && !match['text']) {
			match['text'] = phonetic?.text;
		}

		if (phonetic?.audio && !match['audio']) {
			match['audio'] = phonetic?.audio;
		}

		if (match['text'] && match['audio']) break;
	}
	return match;
};
// ---
// /**
//  * Generates a function comment for the given function body.
//  *
//  * @param {any} data - The data to be processed by the function.
//  * @return {object} - An object containing the parsed data.
//  *                   - `puredefine`: The definition of the word.
//  *                   - `partofspeech`: The part of speech of the word.
//  *                   - `wordtobedefine`: The word to be defined.
//  *                   - `example`: An example sentence using the word.
//  * @throws {Error} - If there is no data provided.
//  */
// export const Meaning = (data) => {
// 	let dataparesed = JSON.parse(JSON.stringify(data));
// 	if (dataparesed !== undefined) {
// 		let i;
// 		for (i = 0; i < dataparesed[0]?.meanings.length; i++) {
// 			if (dataparesed[0]?.meanings.length <= 0) {
// 				return {
// 					undefined
// 				};
// 			}
// 			return {
// 				puredefine: dataparesed[i]?.meanings[i].definitions[i].definition,
// 				partofspeech: dataparesed[i]?.meanings[i].partOfSpeech,
// 				wordtobedefine: dataparesed[i]?.word,
// 				example: dataparesed[i]?.meanings[i].definitions[i].example
// 			};
// 		}
// 	} else {
// 		throw new Error('NO DATA NIGGA');
// 	}
// }
