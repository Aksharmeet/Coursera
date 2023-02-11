const express = require('express')
const cors = require('cors')

const app = express()

// * routes
const notesRouter = require('./routes/notes.routes')

const corsOptions = {
	origin: 'http://localhost:3000',
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions))

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/notes', notesRouter)

const PORT = process.env.PORT || 3000
app.listen(
	(PORT,
	() => {
		console.log(`Listening to ${PORT}`)
	})
)
