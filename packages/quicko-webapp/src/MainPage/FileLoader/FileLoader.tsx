import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import DropZone from './DropZone';
import NewFilePanel from './NewFilePanel';

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

export default FileLoader;
