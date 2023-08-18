const { Router } = require("express");
const router = Router();

const { requireAuth } = require("../middlewares/authMiddleware");
const taskController = require("../controllers/tasks");

router.post("/task", requireAuth, taskController.add_task);
router.get("/tasks", requireAuth, taskController.get_tasks);

module.exports = router;
