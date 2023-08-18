const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      validate: {
        len: [6, 50],
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
  });
  User.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);
    console.log("User created", user);
  });

  // static method to login user

  User.login = async (email, password) => {
    const user = await User.findOne({ where: { email } });

    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        return user;
      }

      throw Error("incorrect password");
    }
    throw Error("incorrect email");
  };

  return User;
};
