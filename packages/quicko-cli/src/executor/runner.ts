import { TaskModel, TaskTypesKeys, FolderPathFieldTypes } from 'quicko-core/models/Task';
import { HydratedPlaybookModel } from 'quicko-core/models/Playbook';
import { askFolderLocation } from './dialog';
import { createFile, executeCommand } from './runners';
import store from './store';

const extractFileLocation = async (task: TaskModel, context: any) => {
  const { parentFolderPath } = task;
  if (!parentFolderPath) return './';
  const { type, value } = parentFolderPath;
  switch (type) {
    case FolderPathFieldTypes.Root:
      return './';
    case FolderPathFieldTypes.UserInput:
      const { lastFolderLocationPath } = context;
      if (lastFolderLocationPath) return lastFolderLocationPath;
      const { path } = await askFolderLocation();
      return path;
    case FolderPathFieldTypes.Value:
      return value;
    default:
      return './';
  }
};

const executeTask = async (task: TaskModel, params: any, context: any) => {
  switch (task.type) {
    case TaskTypesKeys.CreateFile:
      const { fileName, fileContent } = task;
      const location = await extractFileLocation(task, context);
      createFile(location, params, fileName, fileContent);
      break;

    case TaskTypesKeys.ExecuteCommand:
      const { command } = task;
      executeCommand(params, command);
      break;

    case TaskTypesKeys.ExecutePlaybook:
      const playbookId = task.playbookId;
      const playbook = store[playbookId];
      run(playbook, params, context);
      break;
    default:
      break;
  }
};

const run = async (playbook: HydratedPlaybookModel, params: any, context: any) => {
  for (const task of playbook.tasks) {
    await executeTask(task, params, context);
  }
};

export default run;
