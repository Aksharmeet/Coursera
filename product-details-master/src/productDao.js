const fs = require('fs')
const path = require('path')
const getProducts = function (done) {
	const fileContent = fs.readFileSync(path.join('src', 'products.json'), 'utf8')

	if (!fileContent) {
		return done('No data found', null)
	} else {
		const productData = JSON.parse(fileContent)
		return done(null, productData)
	}
}

const getProductById = function (id, done) {}

const saveProductDetails = function (ProductDetails, done) {}

const deleteProductById = function (productId, done) {}

module.exports = {
	getProducts,
	getProductById,
	saveProductDetails,
	deleteProductById,
}
