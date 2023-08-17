const { Sequelize, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const sequelize = new Sequelize("todoapp", "root", "1234", {
  host: "localhost",
  dialect: "mysql",
});

const User = sequelize.define("users", {
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

// sequelize.sync().then(() => {
//     console.log('Task table created successfully!');
//  }).catch((error) => {
//     console.error('Unable to create table : ', error);
//  });

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

    throw new Error("incorrect password debug :: ");
  }
  throw Error("incorrect email");
};
module.exports = User;
