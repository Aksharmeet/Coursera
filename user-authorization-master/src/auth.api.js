const express = require('express')
const config = require('../config')
const router = express.Router()
const oauthCtrl = require('./auth.controller')

// redirects the login to consent authorization screen from github
router.get('/login', (req, res) => {
	res.redirect(`https://github.com/login/oauth/authorize?client_id=${config.CLIENT_ID}`)
})

// Callback url to which github oauth code is sent
router.get('/callback', (req, res) => {
	try {
		oauthCtrl.oauthProcessor(req.query.code, (err, token) => {
			if (err) return res.status(400).send('Bad Request')

			return res.redirect(`http://localhost:3000?token=${token}`)
		})
	} catch (err) {
		return res.status(500).send('Internal server error')
	}
})

module.exports = router
