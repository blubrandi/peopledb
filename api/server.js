const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const studentsRouter = require('../students/students-router.js')
const tlsRouter = require('../team-leads/tl-router.js')
const slsRouter = require('../section-leads/section-leads-router.js')
const notesRouter = require('../notes/notes-router.js')
const usersRouter = require('../users/users-router.js')

const server = express()

server.use(helmet());
server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
    res.send(
        `<h1 style="width:100%; display: flex; justify-content:center; align-items: center; font-size:10rem; flex-direction: column;">👨‍👩‍👧‍👦<span style="font-size:0.9rem">db</span></h1>`
    )
})

server.use('/students', studentsRouter)
server.use('/team-leads', tlsRouter)
server.use('/section-leads', slsRouter)
server.use('/notes', notesRouter)
server.use('/users', usersRouter)


module.exports = server

