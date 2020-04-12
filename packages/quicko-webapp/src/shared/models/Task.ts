export enum TaskTypesKeys {
    CreateFile = "CREATE_FILE",
    ExecuteCommand = "EXECUTE_COMMAND",
    ExecutePlaybook = "EXECUTE_PLAYBOOK",
    ExecuteCodemod = "EXECUTE_CODEMOD",
    TypescriptAddMembersToClass = "TYPESCRIPT_ADD_MEMBERS_TO_CLASS",
}

export enum FolderPathFieldTypes {
    Root = "ROOT",
    UserInput = "USER_INPUT",
    Value = "VALUE",
}

export enum FilePathFieldTypes {
    UserInput = "USER_INPUT",
    Value = "VALUE",
}

export interface TaskModel {
  [key: string]: any;
}

export const FIELD_TYPES = {
  TEXT: 'TEXT',
  FOLDER_PATH: 'FOLDER_PATH',
  FILE_PATH: 'FILE_PATH',
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
  },
  [TaskTypesKeys.TypescriptAddMembersToClass]: {
    key: TaskTypesKeys.TypescriptAddMembersToClass,
    label: 'Typescript add members to class',
    fields: [
      { name: 'filePath', label: 'File to edit', type: FIELD_TYPES.FILE_PATH },
      { name: 'membersToAdd', label: 'Members code to add', type: FIELD_TYPES.CODE }
    ]
  }
};

export interface TasksState {
  [id: string]: TaskModel;
}
