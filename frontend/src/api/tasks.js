import { post, deleteRest, toJSON } from '../utils/api';

export const createTask = ({ taskName, parentId, stage, worker }) => post(
  `http://localhost:3001/tasks/new`,
  {
    taskName,
    parentId,
    stage,
    worker
  }
).then(toJSON);

export const changeTitle = ({ taskName, id }) => post(
  `http://localhost:3001/tasks/edit-title`,
  { taskName, id }
).then(toJSON);

export const fetchTasks = () => fetch(`http://localhost:3001/tasks/all`)
  .then(toJSON);

export const changeWorker = ({ worker, id }) => post(
  `http://localhost:3001/tasks/edit-worker`,
  { worker, id }
).then(toJSON);

export const changeStatus = ({ status, id }) => post(
  'http://localhost:3001/tasks/edit-title',
  { status, id }
).then(toJSON);

export const removeTask = (id) => deleteRest(
  `http://localhost:3001/tasks/${id}`
).then(toJSON);
