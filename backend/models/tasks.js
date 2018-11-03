var Datastore = require('nedb')

db.tasks = new Datastore({
  filename: 'path/to/task',
  autoload: true,
  onload: err => {
    if (err) {
      console.error('Error while loading db', err)
    } else {
      console.log('first success!')
    }
  }
});

let tasks = [];
tasks = db.tasks.find({}, function (err, allTasks) {
  tasks = allTasks;
});

let lastId = 0;

const addTask = async ({ taskName, parentId, stage, worker }) => {
  const newTask = {
    taskName,
    parentId,
    stage,
    worker
  };

  await db.tasks.insert(newTask, function (err, newDoc) {
    if (err) {
      console.log(err)
    }
  });

  await db.tasks.find({}, function (err, allTasks) {
    tasks = allTasks;
  });

  return newTask;
};

const getTasks = async () => {
  return tasks;
};

const changeTitle = async (taskName, id) => {
  await db.tasks.update({ id: id }, { $set: { taskName } }, {}, function (err, numReplaced) {
  });
  await db.tasks.find({}, function (err, allTasks) {
    tasks = allTasks;
  });
  return { taskName, id };
};

const changeWorker = async (worker, id) => {
  await db.tasks.update({ id: id }, { $set: { worker } }, {}, function (err, numReplaced) {
  });
  await db.tasks.find({}, function (err, allTasks) {
    tasks = allTasks;
  });
  return { worker, id };
};

const removeTask = async (id) => {
  await db.tasks.remove({ id: id }, {}, function (err, numRemoved) {
    numRemoved = 1
  });
  await db.tasks.find({}, function (err, allTasks) {
    tasks = allTasks;
  });
  return { id };
};

module.exports = {
  addTask,
  getTasks,
  changeTitle,
  changeWorker,
  removeTask
};
