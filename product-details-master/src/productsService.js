const productDao = require('./productDao.js')

const getProducts = function (done) {
	productDao.getProducts(done)
}

const getProductById = function (id, done) {
	//call dao getProductById method and pass the parameter
}
const saveProductDetails = function (productDetails, done) {
	//call dao saveProductDetails method and pass the parameter
}

const deleteProductById = (productId, done) => {
	//call dao deleteProductById method and pass the parameter
}

module.exports = {
	getProducts,
	getProductById,
	saveProductDetails,
	deleteProductById,
}
