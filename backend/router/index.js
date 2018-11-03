const Router = require('express').Router;
const listRouter = require('./lists');
const tasksRouter = require('./tasks');

const router = Router();

router
  .use('/lists', listRouter)
  .use('/tasks', tasksRouter);

module.exports = router;
