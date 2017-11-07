import React from 'react';
import { Label } from 'semantic-ui-react';

const StatusLabel = props => (
  <Label
    as='a'
    color={props.label === 'open' ? 'green' : 'red'}
    className={props.label === 'open' ? 'green' : 'red'}
  >
    {props.label}
  </Label>
);

export default StatusLabel;
