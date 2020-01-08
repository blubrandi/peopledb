exports.up = function(knex, Promise) {
    return knex.schema

        .createTable("users", usersColumn => {
            usersColumn.increments().primary();

            usersColumn
                .text("username")
                .unique()
                .notNullable();

            usersColumn.text("name").notNullable();

            usersColumn.text("password").notNullable();

            usersColumn.text("role").notNullable();
        })
        
        .createTable("section_leads", sectionLeadsColumn => {
            sectionLeadsColumn.increments().primary();

            sectionLeadsColumn
                .integer("user_id")
                .unsigned()
                .references("id")
                .inTable("users");

            sectionLeadsColumn.text("github_username");

            sectionLeadsColumn.text("email");
        })
        
        .createTable("team_leads", teamLeadsColumn => {
            teamLeadsColumn.increments().primary();

            teamLeadsColumn.text("tl_name").notNullable();

            teamLeadsColumn.text("github_username").notNullable();

            teamLeadsColumn.text("email");

            teamLeadsColumn.text("slack_channel");

            teamLeadsColumn
                .integer("sl_id")
                .unsigned()
                .references("id")
                .inTable("section_leads");

            teamLeadsColumn.boolean("tl_active").notNullable();
        })

        .createTable("students", studentsColumn => {
            studentsColumn.increments().primary();

            studentsColumn.text("student_name").notNullable();

            studentsColumn.text("github_username").notNullable();

            studentsColumn.text("tz", 3);

            studentsColumn.integer("sprint_group").notNullable();

            studentsColumn.text("os").notNullable();

            studentsColumn.text("text_editor").notNullable();

            studentsColumn
                .integer("tl_id")
                .unsigned()
                .references("id")
                .inTable("team_leads");

            studentsColumn.boolean("student_active").notNullable();
        })
        
        .createTable("notes", notesColumn => {
            notesColumn.increments().primary();

            notesColumn
                .integer("sl_id")
                .unsigned()
                .references("id")
                .inTable("section_leads");

            notesColumn.integer("tl_id");

            notesColumn
                .integer("student_id")
                .unsigned()
                .references("id")
                .inTable("students");


            notesColumn.text("note_type").notNullable();

            notesColumn.text("note_text").notNullable();

            notesColumn.boolean("archived").notNullable();
        });
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists("notes")
        .dropTableIfExists("students")
        .dropTableIfExists("team_leads")
        .dropTableIfExists("section_leads")
        .dropTableIfExists("users")

};
