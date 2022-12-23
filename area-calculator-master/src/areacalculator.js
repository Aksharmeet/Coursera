const pi = 3.14

const calculateArea = (choice, side, length, breadth, radius) => {
	let area = 0.0
	// write logic here
	// note that you check the values passed are not null before performing any operation on them
	if (choice === 'circle' && radius) {
		// area of circle
		area = Math.PI * radius * radius
		return area
	} else if (choice == 'rectangle' && breadth && length) {
		// area of rectangle
		area = breadth * length
		return area
	} else if (choice == 'square' && side) {
		// parameter is passing not the area of a square
		area = side * 4
		return area
	}

	return -1
}
module.exports = { calculateArea }
