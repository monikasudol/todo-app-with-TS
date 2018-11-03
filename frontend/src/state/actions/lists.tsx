import List from '../models/lists'

export enum ActionTypes {
  ADD_NEW_LIST = 'lists: add-new-list',
  ADD_NEW_LIST_SUCCESS = 'lists: add-new-list-success',
  FETCH_ALL_LISTS = 'lists: fetch-lists',
  FETCH_ALL_LISTS_SUCCESS = 'lists: fetch-lists-success',
  REMOVE_LIST = 'lists: remove-list',
  REMOVE_LIST_SUCCESS = 'lists: remove-list-success',
  EDIT_LIST_TITLE = 'lists: edit-list-title',
  EDIT_LIST_TITLE_SUCCESS = 'lists: edit-list-title-success',
  EDIT_LIST_TITLE_FAILURE = 'lists: edit-list-title-failure'
};

export interface CreateNewListAction {
  type: ActionTypes.ADD_NEW_LIST, payload: {
    title: string,
    owner: string,
    day: any,
    month: any,
    year: any
  }
};

export interface AddNewListSuccessAction { type: ActionTypes.ADD_NEW_LIST_SUCCESS, payload: { list: List } };
export interface RemoveListsAction { type: ActionTypes.REMOVE_LIST, payload: { id: string } };
export interface RemoveListsSuccessAction { type: ActionTypes.REMOVE_LIST_SUCCESS, payload: { idToRemoveList: string } };
export interface EditListTitleAction { type: ActionTypes.EDIT_LIST_TITLE, payload: { title: string, id: string } }
export interface EditListTitleSuccessAction { type: ActionTypes.EDIT_LIST_TITLE_SUCCESS, payload: { title: string, id: string } }
export interface FetchAllListsAction { type: ActionTypes.FETCH_ALL_LISTS };
export interface FetchAllListsSuccessAction { type: ActionTypes.FETCH_ALL_LISTS_SUCCESS, payload: { lists: any } };

export function createNewList(
  title: string,
  owner: string,
  day: any,
  month: any,
  year: any
): CreateNewListAction {

  return {
    type: ActionTypes.ADD_NEW_LIST,
    payload: {
      title: title,
      owner: owner,
      day: day,
      month: month,
      year: year
    }
  }
};

export function addNewListSuccess(
  list: List
): AddNewListSuccessAction {

  return {
    type: ActionTypes.ADD_NEW_LIST_SUCCESS,
    payload: {
      list
    }
  }
};

export function removeList(
  id: string
): RemoveListsAction {

  return {
    type: ActionTypes.REMOVE_LIST,
    payload: {
      id
    }
  }
};

export function removeListSuccess(
  id: string
): RemoveListsSuccessAction {

  return {
    type: ActionTypes.REMOVE_LIST_SUCCESS,
    payload: {
      idToRemoveList: id
    }
  }
};

export function editListTitle(
  title: string,
  id: string
): EditListTitleAction {

  return {
    type: ActionTypes.EDIT_LIST_TITLE,
    payload: {
      title,
      id
    }
  }
};

export function editListTitleSuccess(
  title: string,
  id: string
): EditListTitleSuccessAction {

  return {
    type: ActionTypes.EDIT_LIST_TITLE_SUCCESS,
    payload: {
      title,
      id
    }
  }
};

export function fetchAllLists(): FetchAllListsAction {

  return {
    type: ActionTypes.FETCH_ALL_LISTS
  }
};

export function fetchAllListsSuccess(lists: any): FetchAllListsSuccessAction {

  return {
    type: ActionTypes.FETCH_ALL_LISTS_SUCCESS,
    payload: {
      lists
    }
  }
};

export type Action = CreateNewListAction | AddNewListSuccessAction | RemoveListsAction | RemoveListsSuccessAction |
  EditListTitleAction | EditListTitleSuccessAction | FetchAllListsAction | FetchAllListsSuccessAction;
