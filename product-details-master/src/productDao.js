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

const getProductById = function (id, done) {
	const fileContent = fs.readFileSync(path.join('src', 'products.json'), 'utf8')

	if (!fileContent) {
		return done('No data found', null)
	} else {
		const productData = JSON.parse(fileContent)
		const product = productData.find((product) => product.id === +id)

		if (!product) {
			return done('No product found', null)
		} else {
			return done(null, product)
		}
	}
}

const saveProductDetails = async function (ProductDetails, done) {
	const fileContent = fs.readFileSync(path.join('src', 'products.json'), 'utf-8')

	if (!fileContent) {
		return done('Products do not exists')
	} else {
		const productData = JSON.parse(fileContent)
		const product = productData.find((data) => data.id === ProductDetails.id)

		if (product) {
			return done('Product already exists')
		} else {
			productData.push(ProductDetails)

			await fs.promises.writeFile(path.join('src', 'products.json'), JSON.stringify(productData), (err) => {
				if (err) {
					return done('Error when writing file')
				}
			})

			return done(null, ProductDetails)
		}
	}
}

// read all products
// check the productid against existing products
// if product doesn't exists add it to the product.json and return updated list in done second argument
//  if product already exists return error product already exists

const deleteProductById = async function (productId, done) {
	const fileContents = fs.readFileSync(path.join('src', 'products.json'), 'utf-8')

	if (!fileContents) {
		return done("Requested data doesn't exists")
	} else {
		const productsData = JSON.parse(fileContents)

		const product = productsData.find((product) => product.id === +productId)

		if (!product) {
			return done("Product doesn't exists..!!")
		} else {
			const updatedProductsData = productsData.filter((product) => product.id !== +productId)

			await fs.promises.writeFile(path.join('src', 'products.json'), JSON.stringify(updatedProductsData), (err) => {
				if (err) {
					return done('Erro encountered when writting file..!!')
				}
			})

			const updatedFile = fs.readFileSync(path.join('src', 'products.json'), 'utf-8')

			return done(null, JSON.parse(updatedFile))
		}
	}
}

module.exports = {
	getProducts,
	getProductById,
	saveProductDetails,
	deleteProductById,
}
