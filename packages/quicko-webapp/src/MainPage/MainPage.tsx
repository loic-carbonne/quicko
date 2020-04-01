import React, { FunctionComponent } from 'react';
import Playbooks from './Playbooks';
import { RootState } from '../shared/reducers';
import { connect } from 'react-redux';

const MainPage: FunctionComponent<any> = (props) => {

  return props.editorOpen ?
    (<Playbooks />) : (null);
};

const mapStateToProps = (state: RootState) => ({
  editorOpen: Object.keys(state.playbooks).length
});

export default connect(
  mapStateToProps,
)(MainPage);

