import cookie from 'cookie';
/**
 * Handle the request to toggle the theme.
 *
 * @param {object} request - The request object.
 * @param {object} response - The response object.
 */
module.exports = async (request, response) => {
	// Parse the cookies from the request headers
	const cookies = cookie.parse(request.headers.cookie || '');

	// Get the current theme from the cookies
	let theme = cookies.theme;

	// Toggle the theme
	theme = theme === 'dark' ? 'light' : 'dark';

	// Prepare the response
	response.writeHead(303, {
		Location: '/',
		'Set-Cookie': `theme=${theme}; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT`
	});
	response.end();
};
