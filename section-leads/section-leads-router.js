const router = require('express').Router();

const SectionLeads = require('../section-leads/section-leads.js')
const restricted = require('../auth/restricted.js')

router.get('/', restricted, (req, res) => {
    SectionLeads.find()
        .then(sls => {
            res.json(sls)
        })
        .catch(err => res.send(err))
})

router.post('/', restricted, (req, res) => {
    SectionLeads.add(req.body)
        .then(sl => {
            res.json(sl)
        })
        .catch(err => {
            res.status(500).json({ err: err, message: 'Error' })
        })
})

module.exports = router