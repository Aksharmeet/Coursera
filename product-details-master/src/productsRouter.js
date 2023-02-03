const productsController = require('./productsController.js')
const router = require('express').Router()
//This method will get all the Product form the product.json

router.get('/', (req, res) => {
	try {
		productsController.getProducts((err, results) => {
			if (err) {
				return res.status(400).send('No products found...!')
			} else {
				return res.status(200).json({ data: results, STATUS: 'OK' })
			}
		})
	} catch (err) {
		return res.status(500).send('Try after sometime...!!')
	}
})

router.get('/:productId', (req, res) => {
	const productId = req.params.productId
	console.log(productId)
	try {
		//get the productid from the req.params
		productsController.getProductById(productId, (err, results) => {
			if (err) {
				return res.status(400).send(err)
			} else {
				return res.status(200).json({ data: results, STATUS: 'OK' })
			}
		})
	} catch (err) {
		return res.status(500).send('Internal error try after sometime..!!')
	}
})

router.post('/', (req, res) => {
	try {
		const productDetails = req.body

		productsController.saveProductDetails(productDetails, (err, results) => {
			if (err) {
				return res.status(400).send(err)
			} else {
				return res.status(201).json({ data: results, STATUS: 'OK' })
			}
		})
	} catch (err) {
		res.status(500).send('Internal error, try again after sometime...!!')
	}
})

router.delete('/:productId', (req, res) => {
	try {
		const productId = req.params.productId
		productsController.deleteProductById(productId, (err, results) => {
			if (err) {
				res.status(400).send(err)
			} else {
				res.status(200).json({ data: results, STATUS: 'OK' })
			}
		})
	} catch (err) {
		res.status(500).send('Internal error, try again after sometime...!!')
	}
})

module.exports = router
