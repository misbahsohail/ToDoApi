"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("Tasks", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        required: true,
      },
      body: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        required: true,
      },
      user: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        required: true,
      },
      isCompleted: {
        type: Sequelize.DataTypes.BOOLEAN,
        required: true,
      },
      // Timestamps
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  async down(queryInterface) {
    return queryInterface.dropTable("Tasks");
  },
};
