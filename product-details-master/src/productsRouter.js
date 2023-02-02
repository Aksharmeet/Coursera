const productsController = require('./productsController.js')
const router = require('express').Router()
//This method will get all the Product form the product.json

// Logical Steps
// call products controller dot getProducts
// if error send 400 response with message 'no products found'
// if no error send 200 res wit results as res
router.get('/', (req, res) => {
	try {
		productsController.getProducts((err, results) => {
			if (err) {
				res.status(400).send('No products found...!')
			} else {
				const jsonData = JSON.stringify(results)
				res.status(200).send(jsonData)
			}
		})
	} catch (err) {
		console.log(err)
		res.status(500).send('Try after sometime')
	}
})

//This method will get the product with given productId form the product.json
// call products controller dot getProductById
// get the id from query params
// use the id to the get the product
// if error send 400 response with message 'no product matching the id exists'
// if no error send 200 res wit results as res
router.get('/:productId', (req, res) => {
	try {
		//get the productid from the req.params

		productsController.getProductById(productId, (err, results) => {})
	} catch (err) {
		//Handle the exception return response as 400 with status as some error msg
	}
})

//This method will save/post a new product in the product.json
// call products controller dot saveProductDetails
// if error send 400 response with message 'product already exists'
// if no error send 200 res with results as res
router.post('/', (req, res) => {
	try {
		//get all the productdetails from the req.body
		const productDetails = {}

		productsController.saveProductDetails(productDetails, (err, results) => {})
	} catch (err) {}
})

//This method will delete product with specific productid from the product.json
// call products controller dot saveProductDetails
// if error send 400 response with message 'product already exists'
// if no error send 200 res with results as res
router.delete('/:productId', (req, res) => {
	try {
		productsController.deleteProductById(productId, (err, results) => {})
	} catch (err) {
		//Handle the exception return response as 400 with status as some error msg
	}
})

module.exports = router
