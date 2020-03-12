import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import DropZone from './DropZone';

const FileLoaderView = styled.div`
  height: 200px;
  max-width: 800px;
  display: flex;
  margin: auto;
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
      <div>
        <button onClick={() => loadFile({})}>Load file</button>
      </div>
    </FileLoaderView>
  );
};

export default FileLoader;
