import { Project, IndentationText } from 'ts-morph';
const fs = require('fs');
import { parseTemplate } from '../../utils/templating';

export const typescriptAddMemberToClass = (fileLocation, membersToAdd, params) => {
  const filePath = parseTemplate(fileLocation, params);
  const codeToAddText = parseTemplate(membersToAdd, params);

  const project = new Project({
    manipulationSettings: {
      indentationText: IndentationText.TwoSpaces
    }
  });

  const sourceFile = project.addSourceFileAtPath(filePath);
  sourceFile.getClasses()[0].addMembers(codeToAddText);
  const newFileText = sourceFile.getFullText();

  fs.writeFileSync(filePath, newFileText, { encoding: 'utf8', flag: 'w' });
};

export default typescriptAddMemberToClass;
