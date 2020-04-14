import {
  TaskModel,
  TaskTypesKeys,
  FolderPathFieldTypes,
  FilePathFieldTypes
} from 'quicko-core/models/Task';
import { HydratedPlaybookModel } from 'quicko-core/models/Playbook';
import { askFolderLocation, askFileLocation } from './dialog';
import { createFile, executeCommand, typescriptTransformationOnFile } from './runners';
import store from './store';

// TODO: make input extraction generic, should not be based on parentFolderPath variable
const extractFolderLocation = async (task: TaskModel, context: any) => {
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

const extractFileLocation = async (task: TaskModel, context: any) => {
  const { filePath } = task;
  if (!filePath) return './';
  const { type, value } = filePath;
  switch (type) {
    case FilePathFieldTypes.UserInput:
      const { lastFolderLocationPath } = context;
      if (lastFolderLocationPath) return lastFolderLocationPath;
      const { path } = await askFileLocation();
      return path;
    case FilePathFieldTypes.Value:
      return value;
    default:
      return './';
  }
};

const executeTask = async (task: TaskModel, params: any, context: any) => {
  switch (task.type) {
    case TaskTypesKeys.CreateFile:
      const { fileName, fileContent } = task;
      const location = await extractFolderLocation(task, context);
      createFile(location, params, fileName, fileContent);
      break;

    case TaskTypesKeys.ExecuteCommand:
      const { command } = task;
      executeCommand(params, command);
      break;

    case TaskTypesKeys.TypescriptTransformationOnFile:
      const { transformationCode } = task;
      const fileLocation = await extractFileLocation(task, context);
      typescriptTransformationOnFile(fileLocation, transformationCode, params);
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
