
exports.up = function (knex, Promise) {

    return knex.schema

        .createTable('students', tbl => {
            tbl.increments()

            tbl
                .string('student_name', 128).notNullable()
                .string('github_username', 128).notNullable()
                .string('tz', 3)
                .integer('sprint_group').notNullable()
                .string('os', 128).notNullable()
                .string('text_editor', 128).notNullable()
                .string('assigned_pm', 128).notNullable()
        })

        .createTable('project_managers', tbl => {
            tbl.increments()

            tbl
                .string('pm_name', 128).notNullable()
                .string('github_username', 128).notNullable()
                .string('email', 128)
                .string('slack_channel')
                .string('assigned_sl')
        })

        .createTable('section_leads', tbl => {
            tbl.increments()

            tbl
                .string('sl_name', 128).unique().notNullable()
        })

        .createTable('notes', tbl => {
            tbl.increments()

            tbl
                .string('note_author', 128).unsigned().references('sl_name').inTable('section_leads')
                .string('student').unsigned().references('student_name').inTable('students')
                .string('pm').unsigned().references('pm_name').inTable('project_managers')
                .string('note_type', 128).notNullable()
                .text('note_text').notNullable()
        })
}



exports.down = function (knex, Promise) {

    return knex.schema

        .dropTableIfExists('students')
        .dropTableIfExists('project_managers')
        .dropTableIfExists('section_leads')
        .dropTableIfExists('notes')
};
