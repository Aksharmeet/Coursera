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
				return res.status(400).send('No products found...!')
			} else {
				return res.status(200).send(JSON.stringify(results))
			}
		})
	} catch (err) {
		return res.status(500).send('Try after sometime...!!')
	}
})

//This method will get the product with given productId form the product.json
// call products controller dot getProductById
// get the id from query params
// use the id to the get the product
// if error send 400 response with message 'no product matching the id exists'
// if no error send 200 res wit results as res
router.get('/:productId', (req, res) => {
	const productId = req.params.productId
	console.log(productId)
	try {
		//get the productid from the req.params
		productsController.getProductById(productId, (err, results) => {
			if (err) {
				return res.status(400).send(err)
			} else {
				return res.status(200).send(JSON.stringify(results))
			}
		})
	} catch (err) {
		return res.status(500).send('Internal error try after sometime..!!')
	}
})

//This method will save/post a new product in the product.json
// call products controller dot saveProductDetails
// if error send 400 response with message 'product already exists'
// if no error send 200 res with results as res
router.post('/', (req, res) => {
	try {
		const productDetails = req.body
		console.log(productDetails)
		productsController.saveProductDetails(productDetails, (err, results) => {
			if (err) {
				return res.status(400).send(err)
			} else {
				return res.status(200).send(JSON.stringify(results))
			}
		})
	} catch (err) {
		res.status(500).send('Internal error, try again after sometime...!!')
	}
})

//This method will delete product with specific productid from the product.json
// call products controller dot saveProductDetails
// if error send 400 response with message 'product already exists'
// if no error send 200 res with results as res
router.delete('/:productId', (req, res) => {
	try {
		const productId = req.params.productId
		productsController.deleteProductById(productId, (err, results) => {
			if (err) {
				res.status(400).send(err)
			} else {
				res.status(200).send(JSON.stringify(results))
			}
		})
	} catch (err) {
		console.log(err)
		res.status(500).send('Internal error, try again after sometime...!!')
	}
})

module.exports = router
