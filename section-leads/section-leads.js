const db = require('../data/dbConfig.js');

module.exports = {
    update,
    find,
    findBy,
    findById,
};

function find() {
    return db('section_leads').select('id', 'user_id', "github_username", "email");
}

function findBy(filter) {
    return db('section_leads').where(filter);
}

function findById(id) {
    return db('section_leads')
        .where({ id })
        .first();
}

function update(id, changes) {
    return db('section_leads')
        .where({ id })
        .update(changes);
}
