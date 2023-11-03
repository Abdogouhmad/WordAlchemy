/** @type {import('./$types').PageServerLoad} */
import { error as svelteError } from '@sveltejs/kit';
import { IData } from '../../../lib/data_dictionary.js';

export const load = async ({ fetch, params: { query }, url }) => {
	const fetchWord = async (query) => {
		const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`);

		if (!res.ok) {
			throw svelteError(res.status, 'Not Found');
		}
		const data = await res.json();

		return data;
	};

	try {
		const { pathname } = url;

		const data = await fetchWord(query);
		return {
			result: data,
			pathname
		};
	} catch (error) {
		throw svelteError(505, 'something went wrong');
	}
};
