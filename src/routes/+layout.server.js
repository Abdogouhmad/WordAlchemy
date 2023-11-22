/** @type {import('./$types').LayoutServerLoad} */
// src/routes/+layout.server.js
export const load = async ({ locals: { getSession } }) => {
	return {
	  session: await getSession(),
	}
  }