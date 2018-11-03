import { combineReducers } from 'redux';
import * as fromLists from './lists';
import * as fromTasks from './tasks';

export interface State {
  lists: fromLists.State,
  tasks: fromTasks.State
};

export const initialState: State = {
  lists: fromLists.initialState,
  tasks: fromTasks.initialState
};

export const reducer = combineReducers<State>({
  lists: fromLists.reducer,
  tasks: fromTasks.reducer
});
