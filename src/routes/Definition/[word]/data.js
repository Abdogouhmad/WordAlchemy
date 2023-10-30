const IPhonetics = {
	text: '',
	audio: '',
	sourceUrl: '',
	license: {
		name: '',
		url: ''
	}
};

const IDefinition = {
	definition: '',
	synonyms: [],
	antonyms: [],
	example: ''
};

const IMeaning = {
	partOfSpeech: '',
	definitions: [IDefinition],
	synonyms: [],
	antonyms: []
};

const IData = {
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

const IStoreData = {
	data: IData,
	isLoading: false,
	status: ''
};
