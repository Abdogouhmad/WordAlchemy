export const IPhonetics = {
	text: '',
	audio: '',
	sourceUrl: '',
	license: {
		name: '',
		url: ''
	}
};

export const IDefinition = {
	definition: '',
	synonyms: [],
	antonyms: [],
	example: ''
};

export const IMeaning = {
	partOfSpeech: '',
	definitions: [IDefinition],
	synonyms: [],
	antonyms: []
};

export const IData = {
	word: '',
	phonetic: null,
	phonetics: [IPhonetics],
	meanings: [IMeaning],
	license: {
		name: '',
		url: ''
	},
	sourceUrls: [''],
	title: '',
	message: '',
	resolution: ''
};

export const IStoreData = {
	data: IData,
	isLoading: false,
	status: ''
};
