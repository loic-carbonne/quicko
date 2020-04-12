import { parseTemplate } from '../../utils/templating';
const util = require('util');
const exec = util.promisify(require('child_process').exec);

export async function executeCommand(templateParams: string, commandTemplate: string) {
  const command = parseTemplate(commandTemplate, templateParams);

  const { stdout, stderr } = await exec(command);
  console.log(stdout);
  console.error(stderr);
}

export default executeCommand;
