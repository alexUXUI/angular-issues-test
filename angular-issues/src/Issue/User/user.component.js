import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import {inspect} from 'util';

const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

const User = props => {
  console.log(`user props ${inspect(props)}`)

  const { image, url, login, type } = props;

  return (
    <Card
      image={image}
      header={login}
      meta={type}
      description={url}
      extra={extra}
    />
  )
}

export default User;
