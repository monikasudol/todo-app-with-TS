var Datastore = require('nedb')

db.tasks = new Datastore({
  filename: 'path/to/task',
  autoload: true,
  onload: err => {
    if (err) {
      console.error('Error while loading db', err)
    } else {
      console.log('database tasks success!')
    }
  }
});

let tasks = [];
tasks = db.tasks.find({}, function (err, allTasks) {
  tasks = allTasks;
});

const refreshTasks = () => {
  db.tasks.find({}, function (err, allTasks) {
    tasks = allTasks;
  });
}

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
    refreshTasks();
  });

  return newTask;
};

const getTasks = async () => {
  return tasks;
};

const changeTitle = async (taskName, id) => {
  await db.tasks.update({ id: id }, { $set: { taskName } }, {}, function (err, numReplaced) {
    refreshTasks();
  });

  return { taskName, id };
};

const changeWorker = async (worker, id) => {
  await db.tasks.update({ id: id }, { $set: { worker } }, {}, function (err, numReplaced) {
    refreshTasks();
  });

  return { worker, id };
};

const removeTask = async (id) => {
  await db.tasks.remove({ _id: id }, {}, function (err, numRemoved) {
    refreshTasks();
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
