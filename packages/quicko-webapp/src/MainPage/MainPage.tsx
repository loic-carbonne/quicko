import React, { FunctionComponent } from 'react';
import FileLoader from './FileLoader';
import Playbooks from './Playbooks';
import { RootState } from '../shared/reducers';
import { connect } from 'react-redux';

const MainPage: FunctionComponent<any> = (props) => {

  return (
    <div>
      {props.editorOpen ?
        (<Playbooks />) : (<FileLoader />)
      }
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  editorOpen: Object.keys(state.playbooks).length
});

export default connect(
  mapStateToProps,
)(MainPage);

