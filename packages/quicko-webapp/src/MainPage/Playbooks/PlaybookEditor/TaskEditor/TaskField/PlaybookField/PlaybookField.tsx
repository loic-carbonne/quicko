import React, { FunctionComponent } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { RootState } from '../../../../../../shared/reducers';
import { connect } from 'react-redux';
import { PlaybookModel } from '../../../../../../shared/models/Playbook';

type PlaybookFieldProps = {
  playbooks: PlaybookModel[];
  value: string;
  onChange: (value: string) => void;
};

const PlaybookField: FunctionComponent<PlaybookFieldProps> = ({
  playbooks,
  value = '',
  onChange
}) => {
  return (
    <Select value={value} onChange={(event: any) => onChange(event.target.value)}>
      {playbooks.map(playbook => (
        <MenuItem key={playbook.id} value={playbook.id}>
          {playbook.name}
        </MenuItem>
      ))}
    </Select>
  );
};

const getPlaybooksFromState = (state: RootState) =>
Object.values(state.playbooks)


const mapStateToProps = (state: RootState) => ({
  playbooks: getPlaybooksFromState(state),
});

// @ts-ignore next-line
export default connect(mapStateToProps)(PlaybookField);
