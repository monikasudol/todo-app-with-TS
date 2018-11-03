import { takeEvery, call, put } from 'redux-saga/effects';
import {
  ActionTypes,
  addNewListSuccess,
  fetchAllListsSuccess,
  editListTitleSuccess,
  removeListSuccess
} from '../actions/lists';
import { 
  fetchLists, 
  addLists,
  removeList,
  editTitle 
} from '../../api/lists.js';

export default function* () {
  yield takeEvery(ActionTypes.FETCH_ALL_LISTS, onFetchAllLists);
  yield takeEvery(ActionTypes.ADD_NEW_LIST, onAddNewList);
  yield takeEvery(ActionTypes.ADD_NEW_LIST_SUCCESS, onFetchAllLists);
  yield takeEvery(ActionTypes.REMOVE_LIST, onListRemove);
  yield takeEvery(ActionTypes.EDIT_LIST_TITLE, onEditListTitle);
}

function* onFetchAllLists() {
  try {
    const lists = yield call(fetchLists);
    yield put(fetchAllListsSuccess(lists));
  } catch (e) {

  }
}

function* onEditListTitle(action: any) {
  const { payload } = action;
  try {
    const response = yield call(editTitle, payload);

    yield put(editListTitleSuccess(response.title, response.id));
  }
  catch (error) {

  }
}

function* onListRemove(action: any) {
  const { payload } = action;
  try {
    const response = yield call(removeList, payload);
    yield put(removeListSuccess(response.idToRemoveList));
  } catch (error) {

  }
}

function* onAddNewList(action: any) {
  const { payload } = action;
  try {
    const response = yield call(addLists, payload);
    yield put(addNewListSuccess(response));
  } catch (error) {

  }
};
