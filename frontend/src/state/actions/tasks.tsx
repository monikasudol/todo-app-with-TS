import Task from '../models/tasks'

export enum ActionTypes {
  FETCH_TASKS = 'tasks: fetch-tasks',
  FETCH_TASKS_SUCCESS = 'tasks: fetch-tasks-success',
  CREATE_NEW_TASK = 'tasks: create-new-task',
  CREATE_NEW_TASK_SUCCESS = 'tasks: create-new-task-success',
  REMOVE_TASK = 'tasks: remove-task',
  REMOVE_TASK_SUCCESS = 'tasks: remove-task[-success'
};

export interface CreateNewTaskAction { type: ActionTypes.CREATE_NEW_TASK, payload: {
  parentId: string,
  taskName: string,
  worker: string,
  stage: string
} };
export interface CreateNewTaskSuccessAction { type: ActionTypes.CREATE_NEW_TASK_SUCCESS, payload: { task: Task } };
export interface RemoveTaskAction { type: ActionTypes.REMOVE_TASK, payload: { id: string } };
export interface RemoveTaskSuccessAction { type: ActionTypes.REMOVE_TASK_SUCCESS, payload: { id: string } };
export interface FetchTasksAction { type: ActionTypes.FETCH_TASKS };
export interface FetchTasksSuccessAction { type: ActionTypes.FETCH_TASKS_SUCCESS, payload: { tasks: any } };

export function createNewTask(
  parentId: string,
  taskName: string,
  worker: string
): CreateNewTaskAction {

  return {
    type: ActionTypes.CREATE_NEW_TASK,
    payload: {
        parentId,
        taskName,
        worker,
        stage: 'to do'
    }
  }
};

export function removeTask(
  id: string
): RemoveTaskAction {

  return {
    type: ActionTypes.REMOVE_TASK,
    payload: {
      id
    }
  }
};

export function createNewTaskSuccess(
  newTask: Task
): CreateNewTaskSuccessAction {

  return {
    type: ActionTypes.CREATE_NEW_TASK_SUCCESS,
    payload: {
      task: newTask
    }
  }
};

export function removeTaskSuccess(
  id: string
): RemoveTaskSuccessAction {

  return {
    type: ActionTypes.REMOVE_TASK_SUCCESS,
    payload: {
      id
    }
  }
};

export function fetchTasks(): FetchTasksAction {
  return {
    type: ActionTypes.FETCH_TASKS,
  }
};

export function fetchTasksSuccess(tasks: any): FetchTasksSuccessAction {
  return {
    type: ActionTypes.FETCH_TASKS_SUCCESS,
    payload: {
      tasks
    }
  }
};

export type Action = CreateNewTaskAction | CreateNewTaskSuccessAction | RemoveTaskAction 
| RemoveTaskSuccessAction | FetchTasksAction | FetchTasksSuccessAction;
