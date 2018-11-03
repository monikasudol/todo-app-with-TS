import Task from '../models/tasks'
import { ActionTypes, Action } from '../actions/tasks'

export interface State {
  tasks: Task[]
}

export const initialState: State = {
  tasks: []
}

export function reducer(state: State = initialState, action: Action) {
  switch (action.type) {

    case ActionTypes.CREATE_NEW_TASK: {

      const task = action.payload;

      return {
        ...state,
        tasks: [...state.tasks, task]
      }
    };

    case ActionTypes.REMOVE_TASK: {
      const id = action.payload.id
      return {
        ...state,
        tasks: [...state.tasks.filter(task => task.id !== id)]
      }
    };

    case ActionTypes.FETCH_TASKS_SUCCESS: {
      const tasks = action.payload.tasks;
      return {
        ...state,
        tasks
      }
    };

    default:
      return state
  };
}
