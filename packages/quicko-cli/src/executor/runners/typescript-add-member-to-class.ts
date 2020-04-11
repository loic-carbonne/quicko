import { Project, IndentationText } from 'ts-morph';

const project = new Project({
  manipulationSettings: {
    indentationText: IndentationText.TwoSpaces
  }
});
const sourceFile = project.addSourceFileAtPath('./pool.service.ts');

const runAddMembersInClass = codeToAddText => {
  sourceFile.getClasses()[0].addMembers(codeToAddText);
  console.log(sourceFile.getFullText());
  return;
};

const codeToAddText = `
isCreatePoolRunning2() {
  return this.poolSelector.getCreatePoolLoading();
}

lollol = '12';
`;

runAddMembersInClass(codeToAddText);
