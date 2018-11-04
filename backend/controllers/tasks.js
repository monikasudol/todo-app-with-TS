const tasksModel = require('../models/tasks');

const handleAddTask = async (req, res) => {
  const task = req.body;
  const newTask = await tasksModel.addTask(task);
  res.send(newTask);
};

const handleGetTasks = async (req, res) => {
  const { omit } = req.query;
  const tasks = await tasksModel.getTasks();
  res.send(tasks);
};

const handleEditTaskTitle = async (req, res) => {
  const taskDetails = req.body;
  const newDetails = await tasksModel.changeTitle(taskDetails.taskName, taskDetails.id);
  res.send(newDetails);
};

const handleEditWorker = async (req, res) => {
  const taskDetails = req.body;
  const newDetails = await tasksModel.changeWorker(taskDetails.worker, taskDetails.id);
  res.send(newDetails);
};

const handleRemoveTask = async (req, res) => {
  const id = req.params.id;
  const taskId = await tasksModel.removeTask(id);
  res.send(taskId);
};

module.exports = {
  handleAddTask,
  handleGetTasks,
  handleEditWorker,
  handleEditTaskTitle,
  handleRemoveTask
};
