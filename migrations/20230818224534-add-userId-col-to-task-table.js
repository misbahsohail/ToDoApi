"use strict";

const { User } = require("../models");
const TasksTable = "Tasks";
const userIdCol = "userId";
const userCol = "user";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const testUser = await User.findOne({
      attributes: ["id"],
      where: {
        email: "example@example.com",
      },
    });
    if (!testUser) {
      console.log("Test user not found");
    }
    queryInterface.addColumn(TasksTable, userIdCol, {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: testUser.id,
      after: userCol,
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(TasksTable, userIdCol);
  },
};
