// Define a getEmployee function that iterates over the employees list and displays it
// Employees must be displayed after a timeout of 1 second.
getEmployee = (employees, callback) => {
	// Write code here to display the name of the employee and return a callback
	setTimeout(() => {
		const empName = employees.map((employee) => employee.name)
		return callback(undefined, empName)
	}, 1000)
}

// Define a function that creates a new employee after 2 seconds.
// and then makes a call to callback function to display the same.
createEmployee = (employees, employee, callback) => {
	setTimeout(() => {
		employees.push(employee)

		// write your code here to push new employee to employees list and return a callback.
		return callback(undefined, employees)
	}, 2000)
}

module.exports = { getEmployee, createEmployee }
