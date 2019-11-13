import React, { FunctionComponent, useState, FormEvent } from 'react';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';

type ParametersEditorProps = {
  parameters: string[];
  onChange: (value: string[]) => void;
};

const ParametersEditor: FunctionComponent<ParametersEditorProps> = ({ parameters = [], onChange }) => {
  const [variable, setVariable] = useState('');
  const [error, setError] = useState('');

  const handleVariableSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (parameters.includes(variable)) {
      setError('Variable already exists');
      return;
    }
    if (variable.length === 0) {
      setError('Variable is empty');
      return;
    }
    onChange([...parameters, variable]);
    setVariable('');
    setError('');
  };

  const handleDeleteVariable = (variable: string) => {
    const index = parameters.indexOf(variable);
    const newParameters = [...parameters];
    newParameters.splice(index, 1);
    onChange(newParameters);
  };

  return (
    <form onSubmit={handleVariableSubmit}>
      {parameters.map(variable => (
        <Chip key={variable} label={variable} onDelete={() => handleDeleteVariable(variable)} />
      ))}
      <TextField
        autoComplete="off"
        value={variable}
        label="Add variable"
        rowsMax="4"
        id="description"
        onChange={e => setVariable(e.target.value)}
      />
      {error}
    </form>
  );
};

export default ParametersEditor;
