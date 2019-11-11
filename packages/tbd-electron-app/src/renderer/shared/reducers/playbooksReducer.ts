import { ADD_PLAYBOOK, DELETE_PLAYBOOK, UPDATE_PLAYBOOK, PlaybooksAction } from './../actions/playbooksActions';
import { ADD_TASK, DELETE_TASK, TasksAction } from '../actions/tasksActions';
import { PlaybooksState } from '@models/Playbook';

const INITIAL_PLAYBOOKS: PlaybooksState = {
  '1': { id: '1', parameters: [], description: '', name: 'Create component', tasks: [] },
  '2': { id: '2', parameters: [], description: '', name: 'Install material-ui', tasks: [] },
  '3': { id: '3', parameters: [], description: '', name: 'Install redux', tasks: [] },
  '4': { id: '4', parameters: [], description: '', name: 'Commit', tasks: [] },
  '5': { id: '5', parameters: [], description: '', name: 'Pull request', tasks: [] },
  '6': { id: '6', parameters: [], description: '', name: 'Insert text field', tasks: [] },
  '7': { id: '7', parameters: [], description: '', name: 'Insert form', tasks: [] },
  '8': { id: '8', parameters: [], description: '', name: 'Insert submit button', tasks: [] },
  '9': { id: '9', parameters: [], description: '', name: 'Insert component', tasks: [] }
};

const updateObjectFieldsById = (state: PlaybooksState, id: string, fields: any) => {
  const object = {
    ...state[id],
    ...fields
  };
  return { ...state, [id]: object };
};

const deleteObjectById = (state: PlaybooksState, id: string) => {
  const { [id]: _, ...newState } = state;
  return newState;
};

const playbooks = (state = INITIAL_PLAYBOOKS, action: PlaybooksAction | TasksAction) => {
  switch (action.type) {
    case ADD_PLAYBOOK:
      return { ...state, [action.playbook.id]: action.playbook };
    case UPDATE_PLAYBOOK: {
      const { id, fields } = action;

      return updateObjectFieldsById(state, id, fields);
    }
    case ADD_TASK: {
      const { playbookId } = action;
      const playbook = state[playbookId];
      const { tasks = [] } = playbook;
      const fields = {
        tasks: [...tasks, action.task.id]
      };

      return updateObjectFieldsById(state, playbookId, fields);
    }
    case DELETE_PLAYBOOK:
      return deleteObjectById(state, action.id);
    case DELETE_TASK:
      const { id, playbookId } = action;
      const playbook = state[playbookId];
      const tasks = playbook.tasks.filter((taskId: string) => id !== taskId);
      const fields = {
        tasks
      };

      return updateObjectFieldsById(state, playbookId, fields);
    default:
      return state;
  }
};

export default playbooks;
