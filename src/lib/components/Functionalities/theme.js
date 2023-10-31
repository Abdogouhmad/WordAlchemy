/**
 * Toggles the theme between light and dark modes.
 *
 * @param {Object} theme - The theme object.
 * @param {Object} $theme - The current theme.
 */
export function toggleTheme(theme, $theme) {
  if ($theme.mode === 'light') {
    // Set the theme mode to dark
    theme.set({ ...$theme, mode: 'dark' });

    // Update the document with the new theme mode
    updateDocument('theme', 'dark', 'light');
  } else {
    // Set the theme mode to light
    theme.set({ ...$theme, mode: 'light' });

    // Update the document with the new theme mode
    updateDocument('theme', 'light', 'dark');
  }
}

/**
 * Updates the document by setting a cookie with the provided name and cls,
 * and modifying the classList of the coreElement and documentElement.
 *
 * @param {string} name - The name of the cookie.
 * @param {string} cls - The class name to be added to the coreElement and documentElement.
 * @param {string} other - The class name to be removed from the coreElement and documentElement.
 */
function updateDocument(name, cls, other) {
	// Set cookie with name and cls
	document.cookie = `${name}=${cls};path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT`;

	// Get coreElement by id and modify classList
	const coreElement = document.getElementById('core');
	coreElement.classList.remove(other);
	coreElement.classList.add(cls);

	// Modify classList of documentElement
	document.documentElement.classList.remove(other);
	document.documentElement.classList.add(cls);
}
