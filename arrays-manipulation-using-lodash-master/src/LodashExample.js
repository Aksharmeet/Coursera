//import the lodash module

//Create a function to find a maximum value from number array.
const findMaxValue = (arr) => {
	return arr.reduce((acc, crr) => (acc > crr ? acc : crr))
}

//Create a function to return all values from numbers array which are greater than the second parameter.​
const filterValues = (arr, num) => {
	return arr.filter((val) => val > num)
}

//Create a function to return all values of employeeName array in capital letters.
const nameInCapital = (arr) => {
	let newArr = arr.map((name) => name.toUpperCase())
	return newArr
}

module.exports = {
	findMaxValue,
	filterValues,
	nameInCapital,
}
