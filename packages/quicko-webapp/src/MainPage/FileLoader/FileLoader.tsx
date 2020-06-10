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
    // @ts-ignore next-line
    document.getElementById('page-wrapper').style.display = "none";
    // @ts-ignore next-line
    document.getElementById('editor').style.display = "block";

    return dispatch(loadFile(data))
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileLoader);
