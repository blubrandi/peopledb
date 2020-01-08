const bcrypt = require("bcryptjs");

exports.seed = (knex) => {
  return knex("users").insert([
    {
      id: 1,
      username: "admin",
      password: bcrypt.hashSync("password", 5),
      role: "admin",
      name: "Brandi!"
    }
  ]);
};
