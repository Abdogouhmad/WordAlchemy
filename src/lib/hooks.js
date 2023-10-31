import cookie from 'cookie';

// Get the theme from cookies or use 'dark' as the default
function getThemeFromCookies(request) {
	const cookies = cookie.parse(request.headers.cookie || '');
	return cookies.theme || 'dark';
}

// Set the theme cookie if it's not already present
function setThemeCookie(request) {
	const cookies = cookie.parse(request.headers.cookie || '');
	if (!cookies.theme) {
		const theme = request.query.get('theme') || 'dark';
		return `theme=${theme};path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT`;
	}
	return null;
}

// Handle the SvelteKit GetSession function
function getSession(request) {
	const theme = getThemeFromCookies(request);
	return {
		theme
	};
}

// Handle the SvelteKit Handle function
async function handle({ request, render }) {
	const themeCookie = setThemeCookie(request);

	if (themeCookie) {
		const response = await render({
			...request,
			method: (request.query.get('_method') || request.method).toUpperCase()
		});

		return {
			...response,
			headers: {
				...response.headers,
				'set-cookie': [themeCookie]
			}
		};
	}

	return render(request);
}

module.exports = {
	getSession,
	handle
};
