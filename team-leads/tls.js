const db = require('../data/dbConfig.js');

module.exports = {
    add,
    update,
    find,
    findBy,
    findById,
    remove
};

function find() {
    return db('team_leads').select('tl_name', 'github_username', 'email', 'slack_channel', 'sl_id', 'tl_active');
}

function findBy(filter) {
    return db('team_leads').where(filter);
}

function findById(id) {
    return db('team_leads')
        .where({ id })
        .first();
}

async function add(tl) {
    const [id] = await db('team_leads').insert(tl);

    return findById(id);
}

function update(id, changes) {
    return db('team_leads')
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db('team_leads')
        .where('id', id)
        .del();
}