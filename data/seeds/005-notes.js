
exports.seed = knex => {
    return knex("notes").insert([
        {
            id: 1,
            sl_id: 1,
            tl_id: 1,
            student_id: 1,
            note_type: "Da Best",
            note_text: "This student rocks!",
            archived: false
        }
    ]);
};
