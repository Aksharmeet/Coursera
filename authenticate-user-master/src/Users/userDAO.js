const fs = require('fs')
const path = require('path')

//This method will findUser
function findUser(email, done) {
	const readStream = fs.createReadStream(path.join(__dirname, 'users.json'), 'utf8')

	readStream.on('data', (chunk) => {
		const users = JSON.parse(chunk)
		const user = users.find((user) => user.email === email)

		if (user) {
			return done(null, user)
		}
	})
	readStream.on('error', (err) => {
		return done('Internal server error')
	})
}

//This method will register user
function registerUser(userData, done) {
	const user = {
		email: userData.email,
		password: userData.password,
	}
	fs.writeFile('./src/Users/user.json', JSON.stringify(user), (err) => {
		if (err) done('Internal server error')
		return done(null, user)
	})
}

module.exports = {
	findUser,
	registerUser,
}
