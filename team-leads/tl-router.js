const router = require('express').Router()

const TeamLead = require('./tls.js')
const restricted = require('../auth/restricted.js')

router.get('/', restricted, (req, res) => {
    TeamLead.find()
        .then(pms => {
            res.json(pms)
        })
        .catch(err => res.send(err))
})

router.post('/', restricted, (req, res) => {
    TeamLead.add(req.body)
        .then(tl => {
            res.json(tl)
        })
        .catch(error => {
            res.status(500).json({ error: error, message: 'There was an error adding this tl.  Please try again.' })
        })
})

router.put('/:id', restricted, (req, res) => {
    const { id } = req.params
    const updated = req.body
    TeamLead.update(id, updated)
        .then(tl => {
            res.json(tl)
        })
        .catch(error => {
            res.status(500).json({ error: error, message: 'Cannot update tl Info' })
        })
})

router.delete('/:id', restricted, (req, res) => {
    TeamLead.remove(req.params.id)
        .then(tl => {
            res.status(200).json({ message: 'Project Manager has been deleted' })
        })
        .catch(error => {
            res.status(500).json({ error, message: 'Error deleting tl.' })
        })
})

module.exports = router