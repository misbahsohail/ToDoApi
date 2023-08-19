const { Task } = require("../models");

module.exports.addTask = async (req, res) => {
  try {
    console.log({ userId: res.locals.userId });
    const { title, body } = req.body;
    const taskCreated = await Task.create({
      title,
      body,
      isCompleted: 0,
      userId: res.locals.userId,
      user: "",
    });
    res.send(taskCreated);
  } catch (err) {
    res.send({ err: `Failed to create a new task : ${err.message}` });
  }
};

module.exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.send(tasks);
  } catch (err) {
    res.send({ err: `Failed to fetch all tasks : ${err.message}` });
  }
};
