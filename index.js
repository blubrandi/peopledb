
require('dotenv').config()

const server = require('./api/server.js')

const port = process.env.PORT || 4200
server.listen(port, () => {
    console.log(` 👨‍👩‍👧‍👦 db on ${port} `)
})

