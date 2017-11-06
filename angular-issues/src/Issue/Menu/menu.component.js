import React, { Component } from 'react'
import { Input, Label, Menu } from 'semantic-ui-react'
import StatusLabel from './Label/label.component';

const GithubMenu = props => {

  const {
    number,
    createdAt,
    updatedAt,
    comments,
    label
  } = props;

  return(
    <Menu vertical>
      <Menu.Item>
        <StatusLabel label={label} />
        Status:
      </Menu.Item>
      <Menu.Item>
        <Label color='teal'>{number}</Label>
        number:
      </Menu.Item>
      <Menu.Item>
        Created
        <Label>{createdAt}</Label>
      </Menu.Item>
      <Menu.Item>
        <Label>1</Label>
        Updates
      </Menu.Item>
    </Menu>
  );
}

export default GithubMenu;
