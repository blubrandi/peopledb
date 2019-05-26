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
    return db('project_managers').select('pm_name', 'github_username', 'email', 'slack_channel', 'assigned_sl', 'pm_active');
}

function findBy(filter) {
    return db('project_managers').where(filter);
}

function findById(id) {
    return db('project_managers')
        .where({ id })
        .first();
}

async function add(pm) {
    const [id] = await db('project_managers').insert(pm);

    return findById(id);
}

function update(id, changes) {
    return db('project_managers')
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db('project_managers')
        .where('id', id)
        .del();
}