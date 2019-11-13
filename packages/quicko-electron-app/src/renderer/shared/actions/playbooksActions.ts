import { PlaybookModel } from 'quicko-core/models/Playbook';
import { Action, ActionCreator } from 'redux';
import uuid from 'uuid/v4';

export const UPDATE_PLAYBOOK = 'UPDATE_PLAYBOOK';
export const DELETE_PLAYBOOK = 'DELETE_PLAYBOOK';
export const ADD_PLAYBOOK = 'ADD_PLAYBOOK';

export interface UpdatePlaybookAction extends Action {
  type: 'UPDATE_PLAYBOOK';
  id: string;
  fields: any;
}
export interface DeletePlaybookAction extends Action {
  type: 'DELETE_PLAYBOOK';
  id: string;
}

export interface AddPlaybookAction extends Action {
  type: 'ADD_PLAYBOOK';
  playbook: PlaybookModel;
}

export const updatePlaybook: ActionCreator<UpdatePlaybookAction> = (id, fields) => ({
  type: UPDATE_PLAYBOOK,
  id,
  fields
});

export const addPlaybook: ActionCreator<AddPlaybookAction> = () => {
  const playbook = {
    id: uuid(),
    name: '',
    description: '',
    parameters: [],
    tasks: [],
  };

  return {
    type: ADD_PLAYBOOK,
    playbook,
  };
};

export const deletePlaybook: ActionCreator<DeletePlaybookAction> = id => ({
  type: DELETE_PLAYBOOK,
  id
});

export type PlaybooksAction = UpdatePlaybookAction | DeletePlaybookAction | AddPlaybookAction;
