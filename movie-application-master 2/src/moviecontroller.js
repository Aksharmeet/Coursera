const movieService = require('./movieservice')

const getMovies = (done) => {
	return movieService.getMovies(done)
}

const getMovieById = (movieId, done) => {
	return movieService.getMovieById(movieId, done)
}

const saveMovieDetails = (movieDetails, done) => {
	return movieService.saveMovieDetails(movieDetails, done)
}

const updateMovieDetails = (movieId, movieDetails, done) => {
	return movieService.updateMovieDetails(movieId, movieDetails, done)
}

const deleteMovieById = (movieId, done) => {
	return movieService.deleteMovieById(movieId, done)
}

module.exports = {
	getMovies,
	getMovieById,
	saveMovieDetails,
	updateMovieDetails,
	deleteMovieById,
}
