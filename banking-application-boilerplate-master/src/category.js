var category = function category(key) {
	// Write the Logic here
	switch (key) {
		case 'pl':
			return 'Personal Loan'

		case 'pm':
			return 'Private Loan'

		case 'Vl':
			return 'Vehicle Loan'

		case 'EL':
			return 'Education Loan'

		case 'hL':
			return 'Home Loan'

		default:
			return ''
	}
}

module.exports = {
	category: category,
}
