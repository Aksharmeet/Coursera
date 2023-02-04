const axios = require('axios')

const getMovies = async (done) => {
	const { data } = await axios.get('http://localhost:3000/movies')

	if (!data) return done('No data found')

	return done(null, data)
}

const getMovieById = async (movieId, done) => {
	const { data } = await axios.get(`http://localhost:3000/movies`, { params: { id: movieId } })
	return done(null, data)
}

const saveMovieDetails = async (movieDetails, done) => {
	if (movieDetails.id === undefined) return done('Movie id is required')

	try {
		const { data } = await axios.post('http://localhost:3000/movies', movieDetails)
		return done(null, data)
	} catch (err) {
		return done('Error while saving movie details')
	}
}

const updateMovieDetails = async (movieId, movieDetails, done) => {
	if (movieDetails.id === undefined) return done('Movie id is required')

	try {
		const { data } = await axios.put(`http://localhost:3000/movies/${movieId}`, movieDetails)
		return done(null, data)
	} catch (err) {
		return done('Error while updating movie details')
	}
}

const deleteMovieById = async (movieId, done) => {
	try {
		await axios.delete(`http://localhost:3000/movies/${movieId}`)
		return done(null, 'Movie deleted successfully')
	} catch (err) {
		return done('Error while deleting movie details')
	}
}

module.exports = {
	getMovies,
	getMovieById,
	saveMovieDetails,
	deleteMovieById,
	updateMovieDetails,
}
