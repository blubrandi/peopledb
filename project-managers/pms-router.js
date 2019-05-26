const router = require('express').Router()

const ProjectManagers = require('../project-managers/pms.js')
const restricted = require('../auth/restricted.js')

router.get('/', restricted, (req, res) => {
    ProjectManagers.find()
        .then(pms => {
            res.json(pms)
        })
        .catch(err => res.send(err))
})

router.post('/', restricted, (req, res) => {
    ProjectManagers.add(req.body)
        .then(pm => {
            res.json(pm)
        })
        .catch(err => {
            res.status(500).json({ err: err, message: 'There was an error adding this PM.  Please try again.' })
        })
})

router.put('/:id', restricted, (req, res) => {
    const { id } = req.params
    const updated = req.body
    ProjectManagers.update(id, updated)
        .then(pm => {
            res.json(pm)
        })
        .catch(error => {
            res.status(500).json({ error: error, message: 'Cannot update PM Info' })
        })
})

router.delete('/:id', restricted, (req, res) => {
    ProjectManagers.remove(req.params.id)
        .then(pm => {
            res.status(200).json({ message: 'Project Manager has been deleted' })
        })
        .catch(error => {
            res.status(500).json({ error, message: 'Error deleting PM.' })
        })
})

module.exports = router