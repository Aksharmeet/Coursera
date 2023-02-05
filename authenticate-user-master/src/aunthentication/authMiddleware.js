const jwt = require('jsonwebtoken')
const config = require('../../config.js')

//This function verifyToken will verify the token coming from headers
const verifyToken = (req, res, next) => {
	// Getting the authorization header
	const token = req.headers['authorization']

	// toke coming in header
	if (!token) return res.status(401).send('Access denied. No token provided.')

	try {
		const decoded = jwt.verify(token, config.AUTH_SECRET)

		req.claims = decoded
	} catch (err) {
		return res.status(400).send('Invalid token.')
	}
	return next()
}

module.exports = verifyToken
