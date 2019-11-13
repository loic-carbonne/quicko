import { TaskModel } from './Task';

interface PlaybookBase {
  id: string;
  name: string;
  description: string;
  parameters: string[];
}

export interface PlaybookModel extends PlaybookBase {
  tasks: string[];
}

export interface PlaybooksState {
  [id: string]: PlaybookModel;
}

export interface HydratedPlaybookModel extends PlaybookBase {
  tasks: TaskModel[];
}

export interface HydratedPlaybooksState {
  [id: string]: HydratedPlaybookModel;
}
