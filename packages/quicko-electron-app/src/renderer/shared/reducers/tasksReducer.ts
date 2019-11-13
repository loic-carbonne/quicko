import { ADD_TASK, UPDATE_TASK, DELETE_TASK, TasksAction } from '../actions/tasksActions';
import { TaskModel } from 'quicko-core/models/Task';

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

const INITIAL_TASKS: TasksState = {
  '1': { id: '1', type: 'CREATE_FILE' }
};

const tasks = (state = INITIAL_TASKS, action: TasksAction) => {
  switch (action.type) {
    case UPDATE_TASK: {
      const { id, fields } = action;

      return updateObjectFieldsById(state, id, fields);
    }
    case ADD_TASK:
      return { ...state, [action.task.id]: action.task };
    case DELETE_TASK:
      return deleteObjectById(state, action.id);
    default:
      return state;
  }
};

export default tasks;
