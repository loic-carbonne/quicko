export enum TaskTypesKeys {
    CreateFile = "CREATE_FILE",
    ExecuteCommand = "EXECUTE_COMMAND",
    ExecutePlaybook = "EXECUTE_PLAYBOOK",
    ExecuteCodemod = "EXECUTE_CODEMOD",
}

export enum FolderPathFieldTypes {
    Root = "ROOT",
    UserInput = "USER_INPUT",
    Value = "VALUE",
}

export interface TaskModel {
  [key: string]: any;
}

export const FIELD_TYPES = {
  TEXT: 'TEXT',
  FOLDER_PATH: 'FOLDER_PATH',
  CODE: 'CODE',
  PLAYBOOK: 'PLAYBOOK'
};

export type FieldModel = {
  name: string;
  label: string;
  type: string;
};

type TaskTypeModel = {
  key: string;
  label: string;
  fields: FieldModel[];
};

type TaskTypesModel = {
  [key: string]: TaskTypeModel;
};

export const TASK_TYPES: TaskTypesModel = {
  [TaskTypesKeys.CreateFile]: {
    key: TaskTypesKeys.CreateFile,
    label: 'File creation',
    fields: [
      { name: 'parentFolderPath', label: 'Parent folder path', type: FIELD_TYPES.FOLDER_PATH },
      { name: 'fileName', label: 'File name', type: FIELD_TYPES.TEXT },
      { name: 'fileContent', label: 'File content', type: FIELD_TYPES.CODE }
    ]
  },
  [TaskTypesKeys.ExecuteCommand]: {
    key: TaskTypesKeys.ExecuteCommand,
    label: 'Command execution',
    fields: [{ name: 'command', label: 'Command', type: FIELD_TYPES.CODE }]
  },
  [TaskTypesKeys.ExecuteCodemod]: {
    key: TaskTypesKeys.ExecuteCodemod,
    label: 'Codemod execution',
    fields: [{ name: 'codemod', label: 'Codemod', type: FIELD_TYPES.CODE }]
  },
  [TaskTypesKeys.ExecutePlaybook]: {
    key: TaskTypesKeys.ExecutePlaybook,
    label: 'Playbook execution',
    fields: [{ name: 'playbookId', label: 'Playbook', type: FIELD_TYPES.PLAYBOOK }]
  }
};

export interface TasksState {
  [id: string]: TaskModel;
}
