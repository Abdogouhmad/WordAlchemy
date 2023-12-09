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
