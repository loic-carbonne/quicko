import React, { useState, FunctionComponent, Fragment } from 'react';
import styled from 'styled-components';

import PlaybookList from './PlaybookList';
import PlaybookEditor from './PlaybookEditor';
import PlaybookHeader from './PlaybookHeader';

const EditionPageView = styled.div`
  height: 100%;
  display: flex;
`;

const Playbooks: FunctionComponent = () => {
  const [selectedPlaybookId, setSelectedPlaybookId] = useState();

  return (
    <Fragment>
      <PlaybookHeader />
      <EditionPageView>
        <PlaybookList
          selectedPlaybookId={selectedPlaybookId}
          setSelectedPlaybookId={setSelectedPlaybookId}
        />
        <PlaybookEditor selectedPlaybookId={selectedPlaybookId} />
      </EditionPageView>
    </Fragment>
  );
};

export default Playbooks;
