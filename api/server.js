const express = require('express')

const server = express()
const cors = require('cors')

server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
    res.send(
        `<h1>Server's good to go...</h1>`
    )
})

module.exports = server