const Sequelize = require("sequelize");
const express = require("express");
const authRoutes = require("./routes/auth");
const taskRoutes = require("./routes/tasks");
const cookieParser = require("cookie-parser");
// express instance
const app = express();

const sequelize = new Sequelize("todoapp", "root", "1234", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    // listen for requests after DB is connected
    app.listen(3000);
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

app.use(express.json());
app.use(cookieParser());

app.use(authRoutes);
app.use(taskRoutes);

// app.get("/set-cookies", (req, res) => {
//   //res.setHeader("Set-Cookies", "newUser=true");

//   res.cookie("newUser", false);
//   res.cookie("newEmp", true, { maxAge: 1000 * 60 * 60 * 24 });
//   //res.cookie('')
//   res.send("");
// });

// app.get("/read-cookies", (req, res) => {
//   const cookies = req.cookies;
//   console.log(cookies);

//   res.json(cookies);
// });
