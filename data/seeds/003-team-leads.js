

exports.seed = (knex) => {
    return knex("team_leads").insert([
      {
        id: 1,
        sl_id: 1,
        tl_name: "Frank Martinez",
        github_username: "letanque",
        email: "test@me.co",
        slack_channel: "webpt11_frank",
        tl_active: true
      }
    ]);
  };