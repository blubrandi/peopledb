const router = require('express').Router()

const Students = require('../students/students.js')
const restricted = require('../auth/restricted.js')

router.get('/', restricted, (req, res) => {
    Students.find()
        .then(students => {
            res.json(students)
        })
        .catch(err => res.send(err))
})

router.post('/', restricted, (req, res) => {
    Students.add(req.body)
        .then(student => {
            res.json(student)
        })
        .catch(err => {
            res.status(500).json({ err: err, message: 'There was an error adding this student.  Please try again.' })
        })
})

module.exports = router