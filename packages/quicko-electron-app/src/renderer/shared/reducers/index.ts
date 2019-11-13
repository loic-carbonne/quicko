import { PlaybooksState } from 'quicko-core/models/Playbook';
import { TasksState } from 'quicko-core/models/Task';
import { combineReducers } from 'redux';
import playbooks from './playbooksReducer';
import tasks from './tasksReducer';

export interface RootState {
  playbooks: PlaybooksState;
  tasks: TasksState;
}

export default combineReducers({
  playbooks,
  tasks
});
