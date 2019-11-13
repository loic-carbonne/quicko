import React, { useState, FunctionComponent } from 'react';
import styled from 'styled-components';

import PlaybookList from './PlaybookList';
import PlaybookEditor from './PlaybookEditor';

const EditionPageView = styled.div`
  height: 100%;
  display: flex;
`;

const Playbooks: FunctionComponent = () => {
  const [selectedPlaybookId, setSelectedPlaybookId] = useState();

  return (
    <EditionPageView>
      <PlaybookList
        selectedPlaybookId={selectedPlaybookId}
        setSelectedPlaybookId={setSelectedPlaybookId}
      />
      <PlaybookEditor selectedPlaybookId={selectedPlaybookId} />
    </EditionPageView>
  );
};

export default Playbooks;
