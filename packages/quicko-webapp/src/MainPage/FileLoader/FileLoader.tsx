import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import DropZone from './DropZone';
import NewFilePanel from './NewFilePanel';
import { Dispatch } from 'redux';
import { loadFile } from '../../shared/actions/playbooksActions';
import { connect } from 'react-redux';

const FileLoaderView = styled.div`
  max-width: 850px;
  display: flex;
  margin: auto;
  justify-content: space-between;
`;

type FileLoaderProps = {
  loadFile: (content: any) => void;
};

const FileLoader: FunctionComponent<FileLoaderProps> = ({
  loadFile,
}) => {
  return (
    <FileLoaderView>
      <DropZone loadFile={loadFile} />
      <NewFilePanel loadFile={loadFile} />
    </FileLoaderView>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadFile: (data: any) => {
    let quickoData = JSON.parse(data);
    quickoData = {
      playbooks: JSON.parse(quickoData.playbooks),
      tasks: JSON.parse(quickoData.tasks),
    };

    return dispatch(loadFile(quickoData))
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileLoader);
