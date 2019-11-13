import React, { FunctionComponent } from 'react';
import { default as MaterialTextField } from '@material-ui/core/TextField';

type TextFieldProps = {
  value: string;
  onChange: (value: string) => void;
};

const TextField: FunctionComponent<TextFieldProps> = ({ value = '', onChange }) => {
  return (
    <MaterialTextField
      autoComplete="off"
      value={value}
      onChange={event => onChange(event.target.value)}
    />
  );
};

export default TextField;
