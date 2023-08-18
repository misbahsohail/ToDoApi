const { User } = require("../models");
const jwt = require("jsonwebtoken");
const env = process.env.NODE_ENV || "development";
const configPath = `${__dirname}/../config/config.json`;
const config = require(configPath)[env];

module.exports.signup_post = async (req, res) => {
  try {
    const userCreated = await User.create(req.body);
    const token = createToken(userCreated.id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: userCreated.id });
  } catch (err) {
    res.send({ err: `Failed to create a new record : ${err.message}` });
  }
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user.id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user.id });
  } catch (err) {
    res.send({ err: err.message });
  }
};

module.exports.logout_get = async (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.send("User logged out");
};

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, config.jwt_token, {
    expiresIn: maxAge,
  });
};
