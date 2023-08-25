const Sequelize = require("sequelize");
const {
  database,
  username,
  password,
  host,
  dialect,
  seederStorage,
} = require("../config/config");

const sequelizeInstance = new Sequelize(database, username, password, {
  host,
  dialect,
  seederStorage,
});

module.exports = sequelizeInstance;
