// Import the required dependencies
const http = require('http')
const moviesService = require('./moviesService')
const getRequestData = require('./utils')

// Define the port at which the application will run
const PORT = process.env.PORT || 6000

// Define the server
const server = http.createServer(async (req, res) => {
	if (req.url === '/api/movies' && req.method === 'GET') {
		// Get all movies
		moviesService.getMovies((err, data) => {
			if (err) {
				res.writeHead(400, { 'content-type': 'application/json' })
				console.log(err)
				res.end(err)
			} else {
				res.writeHead(200, { 'content-type': 'application/json' })

				res.end(data)
			}
		})
	} else if (req.url.match(/\/api\/movies\/([0-9]+)/) && req.method === 'GET') {
		// Get a movie with specified id
		const id = +req.url.split('/')[3]
		moviesService.getMoviesById(id, (err, data) => {
			if (err) {
				res.writeHead(400, { 'content-type': 'application/json' })
				res.end(err)
			} else {
				res.writeHead(200, { 'content-type': 'application/json' })
				res.end(data)
			}
		})
	} else if (req.url === '/api/movies' && req.method === 'POST') {
		// Save movie details
		const data = await getRequestData(req)
		moviesService.saveMovie(JSON.parse(data), (err, data) => {
			if (err) {
				res.writeHead(400, { 'content-type': 'application/json' })
				res.end(err)
			} else {
				res.writeHead(200, { 'content-type': 'application/json' })
				res.end(data)
			}
		})
	} else if (req.url.match(/\/api\/movies\/([0-9]+)/) && req.method === 'PUT') {
		// Update a specific movie
		const id = +req.url.split('/')[3]
		const data = await getRequestData(req)
		moviesService.updateMovie(id, JSON.parse(data), (err, data) => {
			if (err) {
				res.writeHead(400, { 'content-type': 'application/json' })
				res.end(err)
			} else {
				res.writeHead(200, { 'content-type': 'application/json' })
				res.end(data)
			}
		})
	} else if (req.url.match(/\/api\/movies\/([0-9]+)/) && req.method === 'DELETE') {
		// Delete a specific movie
		const id = +req.url.split('/')[3]
		moviesService.deleteMovieById(id, (err, data) => {
			if (err) {
				res.writeHead(400, { 'content-type': 'application/json' })
				res.end(err)
			} else {
				res.writeHead(200, { 'content-type': 'application/json' })
				res.end(data)
			}
		})
	}
	// If no route present capture in the else part
})
// listen to the server on the specified port
server.listen(PORT, () => {
	console.log(`server started on port: ${PORT}`)
})

server.on('error', (err) => {
	console.log(err)
})
