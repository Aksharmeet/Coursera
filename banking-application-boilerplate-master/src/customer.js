var customerList = []

const addCustomer = (CustomerId, CustomerName, CustomerAge, CustomerAddress, CustomerContactNumber, Category) => {
	// Write the Logic here
	if (customerList.find((x) => x[0] == CustomerId) == undefined) {
		customerList.push([CustomerId, CustomerName, CustomerAge, CustomerAddress, CustomerContactNumber, Category])
	}
}

const updateCustomer = (CustomerId, CustomerName, CustomerAge, CustomerAddress, CustomerContactNumber, Category) => {
	// Write the Logic here
	let index = customerList.findIndex((customer) => customer[0] == CustomerId)

	customerList[index] = [CustomerId, CustomerName, CustomerAge, CustomerAddress, CustomerContactNumber, Category]
}

const getAllCustomers = () => {
	// Write the Logic here
	return customerList
}

module.exports = { addCustomer, updateCustomer, getAllCustomers }
