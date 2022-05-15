const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

export const getFullMonthAndYearString = (date: Date | undefined) => {
	if (!date) {
		return null;
	}

	const month = monthNames[date.getMonth()];

	return `${month} ${date.getFullYear()}`;
};

export const getShortMonthAndYearString = (date: Date | undefined) => {
	if (!date) {
		return null;
	}

	const month = monthNames[date.getMonth()].slice(0, 3);

	return `${month} ${date.getFullYear()}`;
};
