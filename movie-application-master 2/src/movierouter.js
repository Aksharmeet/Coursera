const movieController = require('./moviecontroller')
const router = require('express').Router()

// get the all movie data
router.get('/', (req, res) => {
	try {
		movieController.getMovies((err, results) => {
			if (err) {
				return res.status(500).send(err)
			}
			return res.status(200).json({ STATUS: 'ok', data: results })
		})
	} catch (err) {
		return res.status(500).send('Internal Server Error')
	}
})

// get movie by id
router.get('/:movieId', (req, res) => {
	try {
		const id = req.params.movieId
		movieController.getMovieById(+id, (err, results) => {
			if (err) {
				return res.status(500).send(err)
			}
			return res.status(200).json({ STATUS: 'ok', data: results })
		})
	} catch (err) {
		return res.status(500).send('Internal Server Error')
	}
})

// save movie details
router.post('/', (req, res) => {
	try {
		//retreive movieDetails from req.body
		const movieDetails = req.body
		movieController.saveMovieDetails(movieDetails, (err, results) => {
			if (err) {
				return res.status(500).send(err)
			}
			return res.status(200).json({ STATUS: 'ok', data: results })
		})
	} catch (err) {
		return res.status(500).send('Internal Server Error')
	}
})

// update movie details
router.patch('/:movieId', (req, res) => {
	try {
		const id = req.params.movieId
		const movieDetails = req.body

		movieController.updateMovieDetails(+id, movieDetails, (err, results) => {
			if (err) {
				return res.status(500).send(err)
			}
			return res.status(200).json({ STATUS: 'ok', data: results })
		})
	} catch (err) {
		return res.status(500).send('Internal Server Error')
	}
})

// delete movie details
router.delete('/:movieId', (req, res) => {
	try {
		//retreive moviedId from req.params
		const movieId = req.params.movieId

		movieController.deleteMovieById(+movieId, (err, results) => {
			if (err) {
				return res.status(500).send(err)
			}
			return res.status(200).send('Movie deleted successfully')
		})
	} catch (err) {
		return res.status(500).send('Internal Server Error')
	}
})

module.exports = router
