

exports.seed = (knex) => {
  return knex("section_leads").insert([
    {
      user_id: 1,
      id: 1,
      github_username: "bluebrandi",
      email: "get@frank3.me"
    }
  ]);
};
