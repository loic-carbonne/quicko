import React, { Fragment, FunctionComponent } from 'react';
import { default as MaterialTextField } from '@material-ui/core/TextField';
import { default as FormControlLabel } from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';
import { bumpStyled } from '../../../../../../shared/utils';
import { FilePathFieldTypes } from '../../../../../../shared/models/Task';


type FolderPathFieldProps = {
  value: any;
  onChange: (value: any) => void;
};

const ViewRadioGroup = bumpStyled(RadioGroup)`
  flex-direction: row;
`;

const FolderPathField: FunctionComponent<FolderPathFieldProps> =
  ({ value: folderPathValue = { type: null }, onChange }) => {
    const { type, value } = folderPathValue;
    const showPathTextField = type === FilePathFieldTypes.Value;

    return (<Fragment>
      <ViewRadioGroup onChange={(_: any, value: any) => onChange({type: value})}>
        <FormControlLabel
          control={<Radio />}
          label="From user input"
          value={FilePathFieldTypes.UserInput}
        />
        <FormControlLabel
          control={<Radio />}
          label="At specific location"
          value={FilePathFieldTypes.Value}
        />
      </ViewRadioGroup>
      { showPathTextField && <Fragment>
          <Typography>File location</Typography>
          <MaterialTextField
            autoComplete="off"
            value={value}
            onChange={event => onChange({type: FilePathFieldTypes.Value, value: event.target.value})}
          />
        </Fragment>
      }
      </Fragment>
    );
  };

export default FolderPathField;
