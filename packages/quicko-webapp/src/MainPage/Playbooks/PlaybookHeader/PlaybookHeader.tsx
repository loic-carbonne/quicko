import React, { FunctionComponent } from 'react';
import { Paper, Button } from '@material-ui/core';
import styled from 'styled-components';
import { bumpStyled, convertStoreToFileText } from '../../../shared/utils';
import { RootState } from '../../../shared/reducers';
import { connect } from 'react-redux';

type PlaybookHeaderProps = {
  store: RootState;
};

const PlaybookHeaderView = styled(Paper)`
  width: 100%;
  text-align: right;
`;

const CreateButtonView = bumpStyled(Button)`
  margin: 8px;
`;

const download = (filename: string, text: string) => {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

const PlaybookHeader: FunctionComponent<PlaybookHeaderProps> = ({
  store,
}) => {
  const downloadFile = () => {
    const text = convertStoreToFileText(store);
    download('quicko.json', text);
  };

  return (
    <PlaybookHeaderView>
      <CreateButtonView variant="contained" color="primary" onClick={() => downloadFile()}>Download quicko file</CreateButtonView>
    </PlaybookHeaderView>
  )
}

const mapStateToProps = (state: RootState) => ({
  store: state,
});

// @ts-ignore next-line
export default connect(mapStateToProps)(PlaybookHeader);
