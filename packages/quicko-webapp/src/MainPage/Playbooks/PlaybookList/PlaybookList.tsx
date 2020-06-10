import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { bumpStyled } from '../../../shared/utils';
import { PlaybookModel } from '../../../shared/models/Playbook';
import { RootState } from '../../../shared/reducers/index';
import { addPlaybook } from '../../../shared/actions/playbooksActions';
import styled from 'styled-components';
import { Divider, ListItemIcon } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DownloadButton from './DownloadButton';

const ViewList = bumpStyled(List)`
  height: 100%;
  overflow: auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ViewDivider = bumpStyled(Divider)`
  position: initial;
`;

const ViewDrawer = styled.div`
  height: 100%;
  width: 260px;
  min-width: 260px;
  overflow: auto;
  padding: 0;
  background-color: white;
`;

const ViewTitle = styled.h1`
  padding: 20px;
  margin-bottom:10px;
`;

const ViewTop = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const ViewScroll = styled.div`
  overflow: auto;
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
    <ViewDrawer>
      <ViewList component="nav">
        <ViewTop>
          <ViewTitle>Quicko</ViewTitle>
          <ViewDivider />
          <ViewScroll>
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
          </ViewScroll>
        </ViewTop>
        <div>
          <ViewDivider />
          <ListItem
            button
            onClick={addPlaybook}
          >
            <ListItemIcon>
              <AddCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Add playbook" />
          </ListItem>
          <DownloadButton />
        </div>
      </ViewList>
    </ViewDrawer>
  );
};

const mapStateToProps = (state: RootState) => ({
  playbooks: Object.values(state.playbooks)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addPlaybook: () => dispatch(addPlaybook()),
});

// @ts-ignore next-line
export default connect(mapStateToProps, mapDispatchToProps)(PlaybookList);
