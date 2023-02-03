const express = require('express')

const config = require('./config')
const app = express()

const LoggerMiddleware = (req, res, next) => {
	console.log(`${req.url} ${req.method} -- ${new Date()}`)
	next()
}

app.use(LoggerMiddleware)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const productsRouter = require('./src')

app.use('/api/v1/products', productsRouter)

const server = app.listen(config.PORT, () => {
	console.log('Listening on port', config.PORT)
})

module.exports = server
