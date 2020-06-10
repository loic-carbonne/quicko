import React, { FunctionComponent, useEffect, useRef } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import { bumpStyled } from '../../../shared/utils';
import { TASK_TYPES } from '../../../shared/models/Task';
import { addTask, deleteTask } from '../../../shared/actions/tasksActions';
import { updatePlaybook, deletePlaybook } from '../../../shared/actions/playbooksActions';
import { PlaybookModel } from '../../../shared/models/Playbook';
import { RootState } from '../../../shared/reducers';

import TaskEditor from './TaskEditor';
import ParametersEditor from './ParametersEditor';

const ViewPlaybookEditor = styled.div`
  display: flex;
  height: 100%;
  flex: auto;
  overflow: auto;
`;

const ViewTypography = bumpStyled(Typography)`
  margin: auto;
  text-align: center;
`;

const ViewForm = styled.div`
  display: block;
  flex: 1;
  margin: 1em;
  text-align: left;
`;

const ViewTextField = bumpStyled(TextField)`
  margin: 1em;
  display: block;
`;

const ViewButtonGroup = bumpStyled(ButtonGroup)`
  margin: 1em;
`;

type PlaybookEditorProps = {
  playbook: PlaybookModel;
  updatePlaybookFields: (fields: any) => void;
  addTask: (fields: any) => void;
  deleteTask: (fields: any) => void;
  deletePlaybook: () => void;
};

const PlaybookEditor: FunctionComponent<PlaybookEditorProps> = ({
  playbook,
  updatePlaybookFields,
  addTask,
  deleteTask,
  deletePlaybook,
}) => {
  const panelRef = useRef(null)
  useEffect(() => {
    // @ts-ignore next-line
    if (panelRef.current) panelRef.current.scrollTo({top: 0});
  }, [playbook]);

  const handleChange = (name: string) => (event: any) => {
    updatePlaybookFields({ [name]: event.target.value });
  };

  if (!playbook) {
    return (
      <ViewPlaybookEditor>
        <ViewTypography>Select a playbook to edit, or create a new one.</ViewTypography>
      </ViewPlaybookEditor>
    );
  }

  const { name = '', description = '', parameters = [], tasks = [] } = playbook;

  return (
    <ViewPlaybookEditor ref={panelRef}>
      <ViewForm>
        <ViewTextField
          autoComplete="off"
          value={name}
          label="Name"
          id="name"
          onChange={handleChange('name')}
        />
        <ViewTextField
          autoComplete="off"
          value={description}
          label="Description"
          multiline
          rowsMax="4"
          id="description"
          onChange={handleChange('description')}
        />
        <ParametersEditor
          onChange={parameters => updatePlaybookFields({ parameters })}
          parameters={parameters}
        />
        {tasks.map(taskId => (
          <TaskEditor key={taskId} taskId={taskId} deleteTask={deleteTask} />
        ))}
        <ViewButtonGroup color="primary" variant="contained" fullWidth>
          {Object.values(TASK_TYPES).map(({ key, label }) => (
            <Button onClick={() => addTask(key)} key={key}>
              Add {label}
            </Button>
          ))}
        </ViewButtonGroup>
        <Button onClick={deletePlaybook}>
          Delete playbook
        </Button>
      </ViewForm>
    </ViewPlaybookEditor>
  );
};

type PlaybookEditorContainerProps = {
  selectedPlaybookId: string;
};

const mapStateToProps = (state: RootState, props: PlaybookEditorContainerProps) => ({
  playbook: state.playbooks[props.selectedPlaybookId]
});
const mapDispatchToProps = (dispatch: Dispatch, props: PlaybookEditorContainerProps) => ({
  updatePlaybookFields: (fields: any) => dispatch(updatePlaybook(props.selectedPlaybookId, fields)),
  addTask: (type: string) => dispatch(addTask(props.selectedPlaybookId, type)),
  deleteTask: (id: string) => dispatch(deleteTask(props.selectedPlaybookId, id)),
  deletePlaybook: () => dispatch(deletePlaybook(props.selectedPlaybookId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaybookEditor);
