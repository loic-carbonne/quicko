import { TaskModel, TaskTypesKeys, FolderPathFieldTypes } from './../shared/models/Task';
import { HydratedPlaybookModel } from './../shared/models/Playbook';
import { askFolderLocation } from './dialog';
import store from './store';

const nodePlop = require('node-plop');

const createFileGenerator = (basePath: string, filename: string, template: string) => plop => {
  plop.setGenerator('generator', {
    description: 'add file generator',
    actions: [
      {
        type: 'add',
        path: `./${basePath}/${filename}`,
        template
      }
    ]
  });

  return plop;
};

const createFile = (
  basePath: string,
  templateParams: string,
  filenameTemplate: string,
  fileContentTemplate: string
) => {
  const createComponentGenerator = createFileGenerator(
    basePath,
    filenameTemplate,
    fileContentTemplate
  );
  const plopfile = createComponentGenerator(nodePlop());
  const generator = plopfile.getGenerator('generator');

  return generator.runActions(templateParams);
};

const util = require('util');
const exec = util.promisify(require('child_process').exec);
const Handlebars = require('handlebars');

async function executeCommand(templateParams: string, commandTemplate: string) {
  const template = Handlebars.compile(commandTemplate);

  const command = template(templateParams);

  const { stdout, stderr } = await exec(command);
  console.log(stdout);
  console.error(stderr);
}

// --------------------------------------------------------- //
/*
var jscodeshift = require('jscodeshift');

const executeCodemod = (code: string, transformString: string) => {
  const transform = eval(transformString);
  const toto = transform({ source: code }, { jscodeshift });
  console.log(toto);
};

const codemod = `
(file, api) => {
  const j = api.jscodeshift;

  return j(file.source)
    .find(j.Identifier)
    .forEach(path => {
      j(path).replaceWith(
        j.identifier('bar')
      );
    })
    .toSource();
  };
`;


const code = `const foo = 'bar'; const toto = 'bar';`;
executeCodemod(code, codemod);
*/

const extractFileLocation = async (task: TaskModel, context: any) => {
  const {parentFolderPath} = task
  if(!parentFolderPath) return './';
  const {type, value} = parentFolderPath;
  switch (type) {
    case FolderPathFieldTypes.Root:
      return './';
    case FolderPathFieldTypes.UserInput:
      const {lastFolderLocationPath} = context
      if (lastFolderLocationPath) return lastFolderLocationPath;
      const {path} = await askFolderLocation();
      return path;
    case FolderPathFieldTypes.Value:
      return value;
    default:
      return './';
  }
}

const executeTask = async (task: TaskModel, params: any, context: any) => {
  switch (task.type) {
    case TaskTypesKeys.CreateFile:
      const { fileName, fileContent } = task;
      const location = await extractFileLocation(task, context)
      createFile(location, params, fileName, fileContent);
      break;

    case TaskTypesKeys.ExecuteCommand:
      const { command } = task;
      executeCommand(params, command);
      break;

    case TaskTypesKeys.ExecutePlaybook:
      const playbookId = task.playbookId;
      const playbook = store[playbookId];
      run(playbook, params, context);
      break;
    default:
      break;
  }
};

const run = async (playbook: HydratedPlaybookModel, params: any, context: any) => {
  for (const task of playbook.tasks) {
    await executeTask(task, params, context);
  }
};

export default run;
