import React, { FunctionComponent, useCallback } from 'react';

import {useDropzone} from 'react-dropzone'
import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import { convertFileTextToStore } from '../../../shared/utils';

type DropZoneProps = {
  loadFile: (content: any) => void;
};

const DropZoneContainer = styled(Paper)`
  width: 400px;
  margin: 16px;
`;

const DropZoneView = styled.div`
  border: 2px dashed black;
  border-radius: 5px;
  height: calc(100% - 23px);
  text-align: center;
  margin: 10px;
  display: flex;
  align-items: center;
`;

const CenterParagraph = styled.p`
  text-align: center;
  width: 100%;
`;

const DropZone: FunctionComponent<DropZoneProps> = ({
  loadFile,
}) => {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        // @ts-ignore next-line
        const textContent: string = reader.result;
        let quickoData = convertFileTextToStore(textContent);
        loadFile(quickoData);
      }
      reader.readAsText(file)
    })

  }, [loadFile])

  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <DropZoneContainer>
      <DropZoneView {...getRootProps()}>
        <input {...getInputProps()} />
        <CenterParagraph>Drag 'n' drop your quicko file here,<br></br>or click to upload it</CenterParagraph>
      </DropZoneView>
    </DropZoneContainer>
  )
}

export default DropZone;
