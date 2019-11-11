import { PlaybooksState } from '@models/Playbook';
import { TasksState } from '@models/Task';
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
