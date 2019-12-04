

exports.seed = (knex) => {
    return knex("students").insert([
      {
        student_name: "Sky Carrol",
        github_username: "fractured2k",
        tz: "PST",
        sprint_group: 1,
        os: "Windows",
        text_editor: "Sublime",
        tl_id: 1,
        id: 1,
        student_active: true
      }
    ]);
  };
  