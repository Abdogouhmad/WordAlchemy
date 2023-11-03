// /** @type {import('./$types').PageServerLoad} */
import { error as svelteError } from '@sveltejs/kit';

/**
 * @typedef {Object} RouteParams
 * @property {string} query
 * ...
 */


export async function load({ fetch, params, url }) {
    const wordfetch = async () => {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`);
        if (!response.ok) {
            throw svelteError(404, 'Word not found');
        }
        const data = await response.json();
        console.log(JSON.stringify(data, null, 4));
        return data;
    };
    const { pathname } = url;

    const data = await wordfetch(query);
    return {
        result: data,
        pathname
    };
}