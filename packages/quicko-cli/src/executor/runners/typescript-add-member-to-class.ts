import { Project, IndentationText } from 'ts-morph';
const fs = require('fs');
import { parseTemplate } from '../../utils/templating';

export const typescriptTransformationOnFile = (fileLocation, transformationCode, params) => {
  const filePath = parseTemplate(fileLocation, params);
  const transformationCodeText = parseTemplate(transformationCode, params);

  const project = new Project({
    manipulationSettings: {
      indentationText: IndentationText.TwoSpaces
    }
  });

  const sourceFile = project.addSourceFileAtPath(filePath);
  // tslint:disable-next-line: no-eval
  const newFileContent = eval(transformationCodeText)(sourceFile);

  fs.writeFileSync(filePath, newFileContent, { encoding: 'utf8', flag: 'w' });
};

export default typescriptTransformationOnFile;
