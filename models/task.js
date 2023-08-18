const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Task = sequelize.define("Task", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    isCompleted: {
      type: DataTypes.BOOLEAN,
      required: true,
    },
  });
  return Task;
};
