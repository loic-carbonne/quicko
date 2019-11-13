import React, { Fragment, FunctionComponent } from 'react';
import Editor from 'react-simple-code-editor';
import prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-bash';
import 'prismjs/themes/prism.css';

const { remote } = require('electron');
const mainProcess = remote.require('./main.js');

type CodeFieldProps = {
  value: string;
  onChange: (value: string) => void;
};

const CodeField: FunctionComponent<CodeFieldProps> = ({ value = '', onChange }) => {
  return (
    <Fragment>
      {mainProcess.toto}
      <Editor
        value={value}
        onValueChange={value => onChange(value)}
        highlight={value => prism.highlight(value, prism.languages.javascript, 'javascript')}
        padding={10}
        style={{
          backgroundColor: 'rgb(250, 250, 250)',
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12
        }}
      />
    </Fragment>
  );
};

export default CodeField;
