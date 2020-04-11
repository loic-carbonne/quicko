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

export const createFile = (
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

export default createFile;
