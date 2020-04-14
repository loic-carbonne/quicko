import { parseTemplate } from '../../utils/templating';

const fs = require('fs');
const path = require('path');

// TODO: refactor runners, should all have the same signature (params, task)
export const createFile = (
  basePath: string,
  templateParams: string,
  filenameTemplate: string,
  fileContentTemplate: string
) => {
  const filePath = parseTemplate(`./${basePath}/${filenameTemplate}`, templateParams);
  const fileContent = parseTemplate(fileContentTemplate, templateParams);

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, fileContent, { encoding: 'utf8', flag: 'w' });

  return;
};

export default createFile;
