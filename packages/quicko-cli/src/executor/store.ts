import Storage from 'node-storage';
import { HydratedPlaybooksState, PlaybooksState } from './../shared/models/Playbook';
import { TasksState } from './../shared/models/Task';

const store = new Storage('quicko.json');

const rawPlaybooks: PlaybooksState = JSON.parse(store.get('playbooks'));
const rawTasks: TasksState = JSON.parse(store.get('tasks'));

const hydratedPlaybooks: HydratedPlaybooksState = Object.keys(rawPlaybooks).reduce(
  (result: HydratedPlaybooksState, key: string) => {
    const playbook = rawPlaybooks[key];
    result[key] = { ...playbook, tasks: playbook.tasks.map(taskId => rawTasks[taskId]) };
    return result;
  },
  {}
);

export default hydratedPlaybooks;
