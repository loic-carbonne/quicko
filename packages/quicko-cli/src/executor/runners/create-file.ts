import { parseTemplate } from '../../utils/templating';

const fs = require('fs');

// TODO: refactor runners, should all have the same signature (params, task)
export const createFile = (
  basePath: string,
  templateParams: string,
  filenameTemplate: string,
  fileContentTemplate: string
) => {
  const path = parseTemplate(`./${basePath}/${filenameTemplate}`, templateParams);
  const fileContent = parseTemplate(fileContentTemplate, templateParams);

  fs.writeFileSync(path, fileContent, { encoding: 'utf8', flag: 'w' });

  return;
};

export default createFile;
