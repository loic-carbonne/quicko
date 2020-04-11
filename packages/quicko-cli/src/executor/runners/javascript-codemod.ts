const jscodeshift = require('jscodeshift');

const executeCodemod = (code: string, transformString: string) => {
  // tslint:disable-next-line: no-eval
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
