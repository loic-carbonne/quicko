import React, { FunctionComponent, useCallback } from 'react';

import {useDropzone} from 'react-dropzone'
import styled from 'styled-components';

type DropZoneProps = {
  loadFile: (content: any) => void;
};

const DropZoneView = styled.div`
  border: 2px dashed black;
  padding: 20px;
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
      // Do whatever you want with the file contents
        const binaryStr = reader.result
        console.log(binaryStr)
      }
      reader.readAsArrayBuffer(file)
    })

  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <DropZoneView {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </DropZoneView>
  )
}

export default DropZone;
