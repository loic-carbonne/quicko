import React, { FunctionComponent, useState } from 'react';
import FileLoader from './FileLoader';
import Playbooks from './Playbooks';

const MainPage: FunctionComponent<any> = () => {
  const [editorOpen, setEditorOpen] = useState(false);

  const loadFile = () => {
    setEditorOpen(true)
  }

  return (
    <div>
      {editorOpen ?
        (<Playbooks />) : (<FileLoader loadFile={loadFile} />)
      }

    </div>
  );
};

export default MainPage;
