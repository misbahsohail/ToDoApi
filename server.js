const express = require("express");
const authRoutes = require("./routes/auth");
const taskRoutes = require("./routes/tasks");
const cookieParser = require("cookie-parser");
const db = require("./models");

// express instance
const app = express();

db.sequelizeInstance
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
