import { post, deleteRest, put, toJSON } from '../utils/api';

export const addLists = (
  { id, title, owner, day, month, year }) => post(
    `http://localhost:3001/lists/new`,
    { id, title, owner, day, month, year }
  ).then(toJSON);

export const removeList = ({ id }) => deleteRest(
  `http://localhost:3001/lists/${id}`
).then(toJSON);

export const editTitle = ({ id, title }) => put(
  `http://localhost:3001/lists/edit-title`,
  { id, title }
).then(toJSON);

export const fetchLists = () => fetch(`http://localhost:3001/lists/all`)
  .then(toJSON);

