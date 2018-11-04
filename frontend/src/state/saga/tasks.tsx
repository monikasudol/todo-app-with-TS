import { takeEvery, call, put } from 'redux-saga/effects';
import {
  ActionTypes,
  createNewTaskSuccess,
  removeTaskSuccess,
  fetchTasksSuccess
} from '../actions/tasks'
import { createTask,
  // changeTitle,
  // changeWorker,
  removeTask,
  fetchTasks
} from '../../api/tasks';

export default function* () {
  yield takeEvery(ActionTypes.FETCH_TASKS, onFetchAllTasks);
  yield takeEvery(ActionTypes.CREATE_NEW_TASK, onCreateNewTask);
  yield takeEvery(ActionTypes.CREATE_NEW_TASK_SUCCESS, onFetchAllTasks);
  // yield takeEvery(EDIT_TASK, onChangeTaskName);
  yield takeEvery(ActionTypes.REMOVE_TASK, onRemoveTask);
  // yield takeEvery(EDIT_TASK_WORKER, onChangeWorker);
};

function* onFetchAllTasks() {
  try {
    const response = yield call(fetchTasks);
    yield put(fetchTasksSuccess(response));
  } catch(e) {

  }
}

function* onCreateNewTask(action: any) {
  const { payload } = action;
  console.log(payload);
  try {
    const response = yield call(createTask, payload);
    yield put(createNewTaskSuccess(response));
  }
  catch (error) {
  }
};

// function* onChangeTaskName(action) {
//   const { payload } = action;
//   try {
//     const response = yield call(changeTitle, payload);
//     yield put(editTaskNameSuccess(response));
//   }
//   catch (error) {

//   }
// };

// function* onChangeWorker(action) {
//   const { payload } = action;
//   try {
//     const response = yield call(changeWorker, payload);
//     yield put(editTaskWorkerSuccess(response))
//   }
//   catch (error) {

//   }
// };

function* onRemoveTask(action: any) {
  const id = action.payload.id;
  console.log(id);
  try {
    const response = yield call(removeTask, id);
    console.log(response)
    yield put(removeTaskSuccess(response));
  }
  catch (error) {
    
  }
};
