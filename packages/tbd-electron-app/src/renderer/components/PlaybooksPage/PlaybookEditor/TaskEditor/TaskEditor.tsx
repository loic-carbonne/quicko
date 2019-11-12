import React, { FunctionComponent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Divider from '@material-ui/core/Divider';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';

import { bumpStyled } from '../../../../shared/utils';
import { updateTask } from '../../../../shared/actions/tasksActions';
import TaskField from './TaskField';
import { TaskModel, TASK_TYPES } from 'tbd-core/models/Task';
import { RootState } from '../../../../shared/reducers';

const ViewExpansionPanelDetails = bumpStyled(ExpansionPanelDetails)`
  flex-direction: column;
`;

type TaskEditorProps = {
  task: TaskModel;
  taskType: any;
  updateTaskFields: (fields: any) => void;
  deleteTask: (id: string) => void;
};

const TaskEditor: FunctionComponent<TaskEditorProps> = ({
  task,
  taskType,
  updateTaskFields,
  deleteTask
}) => {
  const { id } = task;

  return (
    <ExpansionPanel defaultExpanded={true}>
      <ExpansionPanelSummary>
        <Typography>{taskType.label}</Typography>
      </ExpansionPanelSummary>
      <Divider />
      <ViewExpansionPanelDetails>
        {taskType.fields.map((field: any) => (
          <TaskField
            key={field.name}
            task={task}
            field={field}
            updateTaskFields={updateTaskFields}
          />
        ))}
      </ViewExpansionPanelDetails>
      <Divider />
      <ExpansionPanelActions>
        <Button size="small" onClick={() => deleteTask(id)}>
          Delete
        </Button>
      </ExpansionPanelActions>
    </ExpansionPanel>
  );
};

type TaskEditorContainerProps = {
  taskId: string;
};
const mapStateToProps = (state: RootState, props: TaskEditorContainerProps) => {
  const task = state.tasks[props.taskId];

  return {
    task,
    taskType: TASK_TYPES[task.type]
  };
};
const mapDispatchToProps = (dispatch: Dispatch, props: TaskEditorContainerProps) => ({
  updateTaskFields: (fields: any) => dispatch(updateTask(props.taskId, fields))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskEditor);
