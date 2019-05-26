const db = require('../data/dbConfig.js');

module.exports = {
    add,
    update,
    find,
    findBy,
    findById,
};

function find() {
    return db('notes').select('note_author', 'student', 'pm', 'note_type', 'note_text', 'archived');
}

function findBy(filter) {
    return db('notes').where(filter);
}

function findById(id) {
    return db('notes')
        .where({ id }).select('note_author', 'pm', 'note_type', 'note_text')
        .first()
}

async function add(note) {
    const [id] = await db('notes').insert(note);

    return findById(id);
}

function update(id, changes) {
    return db('notes')
        .where({ id })
        .update(changes);
}