const router = require("express").Router();
const homepageController = require("../controllers/HomepageController");
const tasksController = require("../controllers/TasksController");

router.get("/tasks", tasksController.tasks);
router.post("/tasks", tasksController.store);
router.post("/tasks/done/:id", tasksController.done);
router.post("/tasks/delete/:id", tasksController.delete);

module.exports = router;
