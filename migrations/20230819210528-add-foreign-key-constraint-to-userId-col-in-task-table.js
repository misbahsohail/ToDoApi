"use strict";

const constraintType = "FOREIGN KEY";
const constraintName = "FK_tasks_users";
const taskTable = "Tasks";
const userTable = "Users";
const foreignKeyCol = "userId";
const primaryKeyCol = "id";
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    return queryInterface.addConstraint(taskTable, {
      fields: [foreignKeyCol],
      type: constraintType,
      name: constraintName,
      references: {
        table: userTable,
        field: primaryKeyCol,
      },
    });
  },

  async down(queryInterface) {
    return queryInterface.removeConstraint(taskTable, constraintName);
  },
};
