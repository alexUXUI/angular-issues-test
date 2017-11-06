import React from 'react';
import { Grid, Image, Label } from 'semantic-ui-react';

const StatusLabel = props => {

  console.log(`LABEL PROPS`, props);

  const { label } = props;

  if (label === 'open') {
    return (
      <Label as='a' color='green'>{label}</Label>
    );
  } else if (label === 'closed') {
    return (
      <Label as='a' color='red'>{label}</Label>
    );
  } else {
    return (
      <Label as='a'>{label}</Label>
    );
  }

};

export default StatusLabel;
