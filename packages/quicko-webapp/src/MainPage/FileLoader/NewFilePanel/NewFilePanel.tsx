import React, { FunctionComponent, useState } from 'react';
import { Paper, List, ListItem, ListItemText, ListItemIcon, Checkbox, Button } from '@material-ui/core';
import styled from 'styled-components';


const playbooks = {
  "477749ad-99f2-4aaf-bdd6-e39da2e568ae": {
    id: "477749ad-99f2-4aaf-bdd6-e39da2e568ae",
    name: "New playbook",
    description: "",
    parameters: [],
    tasks: [],
  }
}

type NewFilePanelProps = {
  loadFile: (content: any) => void;
};

const NewFilePanelView = styled(Paper)`
  width: 400px;
  margin: 16px;
`;

const CreateButtonView = styled(Button)`
  width: 100%;
`;

const NewFilePanel: FunctionComponent<NewFilePanelProps> = ({
  loadFile,
}) => {
  const items = ['Angular', 'ReactJS', 'Symfony', 'NestJS'];
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleToggle = (itemToToggle: string) => {
    const newCheckedItems = checkedItems.includes(itemToToggle) ?
      [...checkedItems.filter(item => item !== itemToToggle)] :
      [...checkedItems, itemToToggle];
    setCheckedItems(newCheckedItems);
  }

  return (
    <NewFilePanelView>
      <List dense component="div" role="list">
        {items.map(value => {
          const labelId = `transfer-list-item-${value}-label`;

          return (
            <ListItem key={value} role="listitem" button onClick={() => handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  checked={checkedItems.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
      <CreateButtonView variant="contained" color="primary" onClick={() => loadFile({tasks: {}, playbooks})}>Create new quicko file</CreateButtonView>
    </NewFilePanelView>
  )
}

export default NewFilePanel;
