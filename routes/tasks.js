const { Sequelize } = require("sequelize");
const { Router } = require("express");
const router = Router();
const Task = require("../models/task");
const { requireAuth } = require("../middlewares/authMiddleware");

const sequelize = new Sequelize("todoapp", "root", "1234", {
  host: "localhost",
  dialect: "mysql",
});

// router.get("/add-task", async (request, response) => {
//   const dummyTask = {
//     title: "german_FROM_NEW",
//     body: "learn german",
//     user: "Misbah",
//     isCompleted: 0,
//   };

//   await sequelize.sync();

//   const taskCreated = await Task.create(dummyTask);

//   if (!taskCreated) {
//     console.error("Failed to create a new record : ", error);
//   }

//   response.send(taskCreated);

//   //   sequelize.sync().then(() => {
//   //     console.log('Task table created successfully!');
//   //      Task.create(dummyTask).then(res => {
//   //         console.log(res)
//   //         response.send(res)
//   //     }).catch((error) => {
//   //         console.error('Failed to create a new record : ', error);
//   //     });
//   //  }).catch((error) => {
//   //     console.error('Unable to create table : ', error);
//   //  });
// });

router.post("/add-task", requireAuth, async (request, response) => {
  await sequelize.sync();

  const taskCreated = await Task.create(request.body);

  if (!taskCreated) {
    console.error("Failed to create a new record : ", error);
  }

  response.send(taskCreated);
});

router.get("/get-tasks", requireAuth, async (request, response) => {
  //await sequelize.sync();

  const tasks = await Task.findAll();

  if (!tasks) {
    console.error("No task found : ", error);
  }

  response.send(tasks);
});

module.exports = router;
