require("dotenv").config;

const env = process.env.NODE_ENV || "development";
const serverConfig = require(`${__dirname}/config.json`)[env];

module.exports = serverConfig;
