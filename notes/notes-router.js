const router = require('express').Router()

const Notes = require('../notes/notes.js')
const restricted = require('../auth/restricted.js')

router.get('/', restricted, (req, res) => {
    Notes.find()
        .then(notes => {
            res.json(notes)
        })
        .catch(err => res.send(err))
})

router.post('/', restricted, (req, res) => {
    Notes.add(req.body)
        .then(note => {
            res.json(note)
        })
        .catch(err => {
            res.status(500).json({ err: err, message: 'There was an error adding your note.  Please try again.' })
        })
})

module.exports = router