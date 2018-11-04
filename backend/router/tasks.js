const Router = require('express').Router;
const tasksController = require('../controllers/tasks');

const router = Router();

router.use((req, res, next) => {
  console.log('Tasks request');
  next();
});

router.get('/all', tasksController.handleGetTasks);
router.post('/new', tasksController.handleAddTask);
router.put('/edit-title', tasksController.handleEditTaskTitle);
router.put('/edit-worker', tasksController.handleEditWorker);
router.delete('/:id', tasksController.handleRemoveTask);


module.exports = router;
