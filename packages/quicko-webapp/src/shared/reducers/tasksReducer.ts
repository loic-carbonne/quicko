import { ADD_TASK, UPDATE_TASK, DELETE_TASK, TasksAction } from '../actions/tasksActions';
import { TaskModel } from '../models/Task';
import { LOAD_FILE, PlaybooksAction } from '../actions/playbooksActions';

export interface TasksState {
  [id: string]: TaskModel;
}

const updateObjectFieldsById = (state: TasksState, id: string, fields: any) => {
  const object = {
    ...state[id],
    ...fields
  };
  return { ...state, [id]: object };
};

const deleteObjectById = (state: TasksState, id: string) => {
  const { [id]: _, ...newState } = state;
  return newState;
};

const INITIAL_TASKS: TasksState = {};

const tasks = (state = INITIAL_TASKS, action: TasksAction | PlaybooksAction) => {
  switch (action.type) {
    case UPDATE_TASK: {
      const { id, fields } = action;

      return updateObjectFieldsById(state, id, fields);
    }
    case ADD_TASK:
      return { ...state, [action.task.id]: action.task };
    case DELETE_TASK:
      return deleteObjectById(state, action.id);
    case LOAD_FILE:
      return action.tasks;
    default:
      return state;
  }
};

export default tasks;
