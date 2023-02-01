const sinon = require('sinon')
const moviesService = require('../src/moviesService')
const { expect } = require('chai')

describe('Test movie service', () => {
	it('should save movie and return that object', (done) => {
		let movie = {
			id: 2,
			movieName: 'Shawshank Redemption',
			director: 'Franklin',
			rating: '9.9',
		}
		sinon.stub(moviesService, 'saveMovie')
		moviesService.saveMovie(movie, (err, results) => {})
		done()
	})

	it('should return all movies', (done) => {
		sinon.stub(moviesService, 'getMovies')
		moviesService.getMovies((err, results) => {})
		done()
	})
	it('should return movie given the movie id', (done) => {
		sinon.stub(moviesService, 'getMoviesById')
		moviesService.getMoviesById(3, (err, results) => {})
		done()
	})
	it('should update movie given the movie id', (done) => {
		let updatedMovie = {
			id: 7,
			movieName: 'Redemption',
			director: 'Franklin',
			rating: '9.9',
		}
		sinon.stub(moviesService, 'updateMovie')
		moviesService.updateMovie(updatedMovie.id, updatedMovie, (err, results) => {})
		done()
	})
	it('should delete movie given the movie id', (done) => {
		const id = 1
		sinon.stub(moviesService, 'deleteMovieById')
		moviesService.deleteMovieById(id, (err, results) => {})
		done()
	})
})
