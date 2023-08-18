"use strict";

const { User } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    return User.create({
      email: "example@example.com",
      password: "123456",
      name: "Test User",
    });
  },

  async down() {
    return User.destroy({
      where: {
        email: "example@example.com",
      },
    });
  },
};
