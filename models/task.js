const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("todoapp", "root", "1234", {
  host: "localhost",
  dialect: "mysql",
});

const Task = sequelize.define("tasks", {
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

// sequelize.sync().then(() => {
//     console.log('Task table created successfully!');
//  }).catch((error) => {
//     console.error('Unable to create table : ', error);
//  });

module.exports = Task;
