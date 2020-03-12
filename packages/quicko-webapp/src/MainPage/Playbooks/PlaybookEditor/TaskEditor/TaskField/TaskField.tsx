import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

import { TaskModel, FieldModel, FIELD_TYPES } from '../../../../../shared/models/Task';

import CodeField from './CodeField';
import TextField from './TextField';
import PlaybookField from './PlaybookField';
import FolderPathField from './FolderPathField';

type TaskFieldProps = {
  task: TaskModel;
  field: FieldModel;
  updateTaskFields: (fields: any) => void;
};

const TaskField = ({ task, field, updateTaskFields }: TaskFieldProps) => {
  const { name, type, label } = field;
  const value = task[name];

  let FieldComponent: any;
  switch (type) {
    case FIELD_TYPES.CODE:
      FieldComponent = CodeField;
      break;
    case FIELD_TYPES.TEXT:
      FieldComponent = TextField;
      break;
    case FIELD_TYPES.PLAYBOOK:
      FieldComponent = PlaybookField;
      break;
    case FIELD_TYPES.FOLDER_PATH:
      FieldComponent = FolderPathField;
      break;
    default:
      FieldComponent = Fragment;
      break;
  }

  return (
    <Fragment>
      <Typography>{label}</Typography>
      <FieldComponent
        value={value}
        onChange={(value: string) => updateTaskFields({ [name]: value })}
      />
    </Fragment>
  );
};

export default TaskField;
