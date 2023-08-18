const { Sequelize } = require("sequelize");
const { Router } = require("express");
const router = Router();
const { Task } = require("../models");
const { requireAuth } = require("../middlewares/authMiddleware");

router.post("/add-task", requireAuth, async (request, response) => {
  const taskCreated = await Task.create(request.body);

  if (!taskCreated) {
    console.error("Failed to create a new record : ", error);
  }

  response.send(taskCreated);
});

router.get("/get-tasks", requireAuth, async (request, response) => {
  const tasks = await Task.findAll();

  if (!tasks) {
    console.error("No task found : ", error);
  }

  response.send(tasks);
});

module.exports = router;
