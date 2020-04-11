const util = require('util');
const exec = util.promisify(require('child_process').exec);
const Handlebars = require('handlebars');

export async function executeCommand(templateParams: string, commandTemplate: string) {
  const template = Handlebars.compile(commandTemplate);

  const command = template(templateParams);

  const { stdout, stderr } = await exec(command);
  console.log(stdout);
  console.error(stderr);
}

export default executeCommand;
