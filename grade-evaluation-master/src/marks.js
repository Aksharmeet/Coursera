// Define a function to calculate the total marks and return a promise
const calculateTotalMarks = (math, english, science, social, language) => {
	return new Promise((resolve, reject) => {
		if (!(math && english && science && social && language)) {
			reject('Null values for marks')
		}

		resolve(math + english + social + science + language)
	})
}
// Define a function to calculate average marks and return a promise
const calculateAverageMarks = (totalMarks) => {
	return new Promise((resolve, reject) => {
		if (!totalMarks) reject()

		resolve(totalMarks / 5)
	})
}
// Define a function to calculate grade and return a promise
const calculateGrade = (averageMarks) => {
	return new Promise((resolve, reject) => {
		if (!averageMarks) reject()

		// success
		if (averageMarks <= 30) resolve('F')
		else if (averageMarks < 60) resolve('E')
		else if (averageMarks < 70) resolve('C')
		else if (averageMarks < 80) resolve('B')
		else if (averageMarks < 90) resolve('A')
		else if (averageMarks >= 95) resolve('A+')
	})
}

module.exports = {
	calculateAverageMarks,
	calculateGrade,
	calculateTotalMarks,
}
