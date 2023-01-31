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

		moviesService.saveMovie(movie, (err, results) => {
			let movies = JSON.parse(results)

			expect(err).to.be.equal(null)
			expect(movies.length).to.be.equal(8)

			done(err)
		})
	})

	it('should return all movies', (done) => {
		moviesService.getMovies((err, results) => {
			expect(results[0].director).to.be.equal('Joel and Ethan Coen')
			expect(results[1].director).to.be.equal('John Michael McDonagh')
			expect(results[2].director).to.be.equal('Steven Spielberg')
			expect(results[3].director).to.be.equal('Wes Anderson')
			done(err)
		})
	})
	it('should return movie given the movie id', (done) => {
		moviesService.getMoviesById(3, (err, results) => {
			let movie = JSON.parse(results)

			expect(err).to.be.equal(null)
			expect(movie).to.be.an('Object')
			expect(movie.id).to.be.equal(3)
			expect(movie.movieName).to.be.equal('The Guard')

			done(err)
		})
	})
	it('should update movie given the movie id', (done) => {
		let updatedMovie = {
			id: 7,
			movieName: 'Redemption',
			director: 'Franklin',
			rating: '9.9',
		}
		moviesService.updateMovie(updatedMovie.id, updatedMovie, (err, results) => {
			let movies = JSON.parse(results)

			expect(err).to.be.equal(null)
			expect(movies[5].id).to.be.equal(7)
			expect(movies[5].movieName).to.be.equal('Redemption')
			expect(movies[5].rating).to.be.equal('9.9')
			done(err)
		})
	})
	it('should delete movie given the movie id', (done) => {
		const id = 1

		moviesService.deleteMovieById(id, (err, results) => {
			let movies = JSON.parse(results)

			expect(err).to.be.equal(null)
			expect(movies.length).to.be.equal(7)

			done(err)
		})
	})
})
