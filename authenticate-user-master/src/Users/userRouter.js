const router = require('express').Router()
const userController = require('./userController')

//This get method will get the user with token
router.get('/', (req, res) => {
	//retrive userdata from req claims
	const userData = req.claims
	if (!userData.email) return res.status(400).send('User email not available')

	//Calling controller findUser method return the error or result
	try {
		userController.findUser(userData.email, (err, result) => {
			if (err) return res.status(400).send('Error getting the user')

			return res.status(200).json({ STATUS: 'ok', data: result })
		})
	} catch (err) {
		return res.status(500).send('Internal server error')
	}
})

module.exports = router
