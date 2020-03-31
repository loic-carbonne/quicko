import { Action, ActionCreator } from 'redux';
import { v4 as uuid } from 'uuid';

export const UPDATE_TASK = 'UPDATE_TASK';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export interface UpdateTaskAction extends Action {
  type: 'UPDATE_TASK';
  id: string;
  fields: any;
}
export interface AddTaskAction extends Action {
  type: 'ADD_TASK';
  task: any;
  playbookId: string;
}
export interface DeleteTaskAction extends Action {
  type: 'DELETE_TASK';
  playbookId: string;
  id: string;
}

export const updateTask: ActionCreator<UpdateTaskAction> = (id, fields) => ({
  type: UPDATE_TASK,
  id,
  fields
});
export const addTask: ActionCreator<AddTaskAction> = (playbookId, type) => {
  const task = {
    id: uuid(),
    type
  };

  return {
    type: ADD_TASK,
    task,
    playbookId
  };
};
export const deleteTask: ActionCreator<DeleteTaskAction> = (playbookId, id) => ({
  type: DELETE_TASK,
  playbookId,
  id
});

export type TasksAction = UpdateTaskAction | AddTaskAction | DeleteTaskAction;
