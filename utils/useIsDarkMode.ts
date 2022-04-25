// WORK IN PROGRESS

import { useState, useEffect } from 'react';

export default function useIsDarkMode() {
	const [ isDarkModeOn, setIsDarkModeOn ] = useState(false);

	console.log('is dark', isDarkModeOn);

	useEffect(
		() => {
			console.log(document.body.classList.value);
			const isDark = document.body.classList.value.includes('light');
			if (isDark) {
				setIsDarkModeOn(true);
			} else {
				setIsDarkModeOn(false);
			}
		},
		[ isDarkModeOn ]
	);

	return isDarkModeOn;
}
