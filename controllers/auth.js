const { Sequelize } = require("sequelize");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const sequelize = new Sequelize("todoapp", "root", "1234", {
  host: "localhost",
  dialect: "mysql",
});

module.exports.signup_post = async (req, res) => {
  await User.sync();

  // res.send(userCreated);

  try {
    const userCreated = await User.create(req.body);
    const token = createToken(userCreated.id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: userCreated.id });
  } catch (err) {
    res.send({ err: `Failed to create a new record : ${err.message}` });
  } finally {
    console.log("DONE");
  }
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    await sequelize.sync();
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
  return jwt.sign({ id }, "my sectret", {
    expiresIn: maxAge,
  });
};
