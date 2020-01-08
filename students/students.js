const db = require('../data/dbConfig.js');

module.exports = {
    add,
    update,
    find,
    findBy,
    findById,
    remove,
    update
};

function find() {
    return db('students').select('id', 'student_name', 'github_username', 'tz', 'sprint_group', 'os', 'text_editor', 'tl_id', 'student_active');
}

function findBy(filter) {
    return db('students').where(filter);
}

function findById(id) {
    return db('students')
        .where({ id })
        .first();
}

async function add(student) {
    const [id] = await db('students').insert(student);

    return findById(id);
}

function update(id, changes) {
    return db('students')
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db('students')
        .where('id', id)
        .del();
}