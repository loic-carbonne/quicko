import inquirer from 'inquirer';
import store from './store';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import fuzzy from 'fuzzy';
import inquirerFuzzyPath from 'inquirer-fuzzy-path';
import inquirerAutocomplete from 'inquirer-autocomplete-prompt';

inquirer.registerPrompt('autocomplete', inquirerAutocomplete);
inquirer.registerPrompt('fuzzypath', inquirerFuzzyPath);

const getPlaybookNames = () => {
  return Object.values(store).map(playbook => playbook.name);
};

const searchPlaybookByName = async (_answers, input) => {
  const filter = input || '';
  const fuzzyResult = fuzzy.filter(filter, getPlaybookNames());
  return fuzzyResult.map(el => el.original);
};

const findPlaybookByName = (name: string) => {
  return Object.values(store).find(playbook => playbook.name === name);
};

const askPlaybookName = async () => {
  return await inquirer
    .prompt([
      {
        type: 'autocomplete',
        name: 'playbookName',
        message: 'Which playbook do you want?',
        source: searchPlaybookByName
      }
    ])
    .then(answers => {
      return answers.playbookName;
    });
};

const askPlaybookParameters = async (parameters: String[]) => {
  return await inquirer
    .prompt(
      parameters.map(parameter => ({
        type: 'input',
        name: parameter,
        message: parameter
      }))
    )
    .then(answers => {
      return answers;
    });
};

export const askPlaybookConfiguration = async () => {
  const playbookName = await askPlaybookName();
  const playbook = findPlaybookByName(playbookName);
  const playbookParametersKeys = get(playbook, 'parameters');
  const playbookParameters = isEmpty(playbookParametersKeys)
    ? {}
    : await askPlaybookParameters(playbookParametersKeys);

  return { playbook, playbookParameters };
};

export const askFolderLocation = async () => {
  return await inquirer
    .prompt([
      {
        type: 'fuzzypath',
        name: 'path',
        itemType: 'directory',
        // itemType :: 'any' | 'directory' | 'file'
        // specify the type of nodes to display
        // default value: 'any'
        // example: itemType: 'file' - hides directories from the item list
        rootPath: 'src',
        // rootPath :: String
        // Root search directory
        message: 'Select a target directory for your component:',
        default: 'components/',
        suggestOnly: false
        // suggestOnly :: Bool
        // Restrict prompt answer to available choices or use them as suggestions
        // depthLimit: 5,
        // depthLimit :: integer >= 0
        // Limit the depth of sub-folders to scan
        // Defaults to infinite depth if undefined
      }
    ])
    .then(res => res);
};

export const askFileLocation = async () => {
  return await inquirer
    .prompt([
      {
        type: 'fuzzypath',
        name: 'path',
        itemType: 'file',
        // itemType :: 'any' | 'directory' | 'file'
        // specify the type of nodes to display
        // default value: 'any'
        // example: itemType: 'file' - hides directories from the item list
        rootPath: 'src',
        // rootPath :: String
        // Root search directory
        message: 'Select a target directory for your component:',
        default: 'components/',
        suggestOnly: false
        // suggestOnly :: Bool
        // Restrict prompt answer to available choices or use them as suggestions
        // depthLimit: 5,
        // depthLimit :: integer >= 0
        // Limit the depth of sub-folders to scan
        // Defaults to infinite depth if undefined
      }
    ])
    .then(res => res);
};

export default askPlaybookConfiguration;
