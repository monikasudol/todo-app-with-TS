import List from '../models/lists';
import { ActionTypes, Action } from '../actions/lists';

export interface State {
  lists: List[]
};

export const initialState: State = {
  lists: []
};

export function reducer(state: State = initialState, action: Action) {
  switch (action.type) {

    case ActionTypes.FETCH_ALL_LISTS_SUCCESS: {

      const lists = action.payload.lists;
      return {
        ...state,
        lists
      }
    };

    case ActionTypes.ADD_NEW_LIST_SUCCESS: {

      const list = action.payload.list;

      return {
        ...state,
        lists: [...state.lists, list]
      }
    };

    case ActionTypes.REMOVE_LIST_SUCCESS: {
      const id = action.payload.idToRemoveList;
      return {
        ...state,
        lists: [...state.lists.filter(list => list._id !== id)]
      }
    };

    case ActionTypes.EDIT_LIST_TITLE: {
      const id = action.payload.id;
      const title = action.payload.title;
      return {
        ...state,
        lists: state.lists.map(list => list._id === id ? { ...list, title } : list)
      }
    };

    case ActionTypes.EDIT_LIST_TITLE_SUCCESS: {
      const id = action.payload.id;
      const title = action.payload.title;
      return {
        ...state,
        lists: state.lists.map(list => list._id === id ? { ...list, title } : list)
      }
    };

    default:
      return state;
  };
}
