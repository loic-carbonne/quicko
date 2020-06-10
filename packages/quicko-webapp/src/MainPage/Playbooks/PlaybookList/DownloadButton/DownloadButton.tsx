import React, { FunctionComponent } from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { convertStoreToFileText } from '../../../../shared/utils';
import { RootState } from '../../../../shared/reducers';
import { connect } from 'react-redux';
import GetAppIcon from '@material-ui/icons/GetApp';

type PlaybookHeaderProps = {
  store: RootState;
};

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
    <ListItem
      button
      onClick={downloadFile}
    >
      <ListItemIcon>
        <GetAppIcon />
      </ListItemIcon>
      <ListItemText primary="Download quicko.json" />
    </ListItem>
  )
}

const mapStateToProps = (state: RootState) => ({
  store: state,
});

// @ts-ignore next-line
export default connect(mapStateToProps)(PlaybookHeader);
