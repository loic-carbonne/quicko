import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { bumpStyled } from '../../../shared/utils';
import { PlaybookModel } from 'quicko-core/models/Playbook';
import { RootState } from '../../../shared/reducers/index';
import { addPlaybook } from '../../../shared/actions/playbooksActions';

const ViewList = bumpStyled(List)`
  height: 100%;
  overflow: auto;
  padding: 0;
`;

type PlaybookListProps = {
  playbooks: PlaybookModel[];
  selectedPlaybookId: string;
  setSelectedPlaybookId: (playbookId: string) => void;
  addPlaybook: () => void;
};

const PlaybookList: FunctionComponent<PlaybookListProps> = ({
  playbooks,
  selectedPlaybookId,
  setSelectedPlaybookId,
  addPlaybook,
}) => {
  return (
    <ViewList component="nav">
      {playbooks.map(playbook => (
        <ListItem
          key={playbook.id}
          button
          selected={playbook.id === selectedPlaybookId}
          onClick={() => setSelectedPlaybookId(playbook.id)}
        >
          { playbook.name ? <ListItemText primary={playbook.name} /> : <ListItemText secondary="UNNAMED" />}
        </ListItem>
      ))}
        <ListItem
          button
          onClick={addPlaybook}
        >
          <ListItemText primary="Add playbook" />
        </ListItem>
    </ViewList>
  );
};

const mapStateToProps = (state: RootState) => ({
  playbooks: Object.values(state.playbooks)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addPlaybook: () => dispatch(addPlaybook()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaybookList);
