const Router = require('express').Router;
const tasksController = require('../controllers/tasks');

const router = Router();

router.use((req, res, next) => {
  console.log('Tasks request');
  next();
});

router.get('/all', tasksController.handleGetTasks);
router.post('/new', tasksController.handleAddTask);
router.post('/edit-title', tasksController.handleEditTaskTitle);
router.post('/edit-worker', tasksController.handleEditWorker);
router.post('/remove-task', tasksController.handleRemoveTask);


module.exports = router;