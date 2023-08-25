const { Router } = require("express");
const router = Router();

const { requireAuth } = require("../middlewares/authMiddleware");
const taskController = require("../controllers/tasks");

router.post("/task", requireAuth, taskController.addTask);
router.get("/tasks", requireAuth, taskController.getTasks);

module.exports = router;
