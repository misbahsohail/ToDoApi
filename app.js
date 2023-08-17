const express = require("express");
const mongoose = require("mongoose");
const ToDo = require("./models/todo");

// express instance
const app = express();

//connect to mongodb
const dbURI =
  "mongodb+srv://msbhsohail:msbhsohail@cluster0.ewfaxdd.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  .then((result) => {
    console.log(
      "connected to DB and lets do THA THA THAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    );
    // listen for requests after DB is connected
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/add-task", (req, res) => {
  console.log(ToDo);
  // using the model to create a new instance of a Todo document within the code
  const toDo = new ToDo({
    title: "german",
    body: "learn german",
    user: "Misbah",
    isCompleted: 0,
  });

  console.log("best");

  // toDo.save(toDo).then((result)=>{
  //     res.send(result)
  // }).catch((err)=>{
  //     console.log(err)
  // })
});

app.post("/add-task2", (req, res) => {
  console.log(req.query);
  // using the model to create a new instance of a Todo document within the code
  const toDo = new ToDo({ ...req.query });

  //     console.log('best')

  toDo
    .save(toDo)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
