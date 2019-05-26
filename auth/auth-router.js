const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const Users = require('../users/users.js')
const secrets = require('../config/secrets.js')


router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            const token = generateToken(user)
            if (user && bcrypt.compareSync(password, user.password)) {
                res.status(200).json({
                    message: `Welcome, ${user.contact_name}!`,
                    token
                });
            } else {
                res.status(401).json({ message: 'Invalid Credentials' });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
    }

    const options = {
        expiresIn: '2h'
    }

    return jwt.sign(payload, secrets.jwtSecret, options)

}


module.exports = router;