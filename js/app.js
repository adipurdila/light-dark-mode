// Switch function
const switchTheme = () => {
	// Get root element and data-theme value
	const rootElem = document.documentElement
	let dataTheme = rootElem.getAttribute('data-theme')

	if (dataTheme === 'light') {
		rootElem.setAttribute('data-theme', 'dark');

		// Sets the theme in local storage
		localStorage.setItem("theme", "dark");
	} else {
		rootElem.setAttribute('data-theme', 'light');

		// Sets the theme in local storage
		localStorage.setItem("theme", "light");
	}
}

// Add the event listener for the theme switcher
document.querySelector('#theme-switcher').addEventListener('click', switchTheme)