const router = require('express').Router()
const authController = require('./authController')

//import the modules that are required

//This method post will regiater the use
router.post('/register', (req, res) => {
	//retrive name, email and password from request body
	const { name, email, password } = req.body
	if (!(name, email, password)) {
		return res.status(400).send('All input is required')
	}

	const userDetails = { name, email, password }

	try {
		authController.registerUser(userDetails, (err, result) => {
			if (err) return res.status(400).send(err)

			return res.status(200).send(result)
		})
	} catch (err) {
		res.status(400).send('Internal server error')
	}
})

//This method post will login the user once they are registered
router.post('/login', (req, res) => {
	//retrive email and password from req.body
	try {
		const { email, password } = req.body
		if (!(email, password)) return res.status(400).send('All input is required')

		authController.loginUser({ email, password }, (err, result) => {
			if (err) return res.status(400).send(err)

			return res.status(200).send(result)
		})
	} catch (err) {
		return res.status(500).send('Internal server error')
	}
})

module.exports = router
