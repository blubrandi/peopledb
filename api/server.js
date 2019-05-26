const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const studentsRouter = require('../students/students-router.js')
const pmsRouter = require('../project-managers/pms-router.js')
const slsRouter = require('../section-leads/section-leads-router.js')
const notesRouter = require('../notes/notes-router.js')
const usersRouter = require('../users/users-router.js')

const server = express()

server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
    res.send(
        `<h1>Server's good to go...</h1>`
    )
})

server.use('/students', studentsRouter)
server.use('/project-managers', pmsRouter)
server.use('/section-leads', slsRouter)
server.use('/notes', notesRouter)
server.use('/users', usersRouter)


module.exports = server