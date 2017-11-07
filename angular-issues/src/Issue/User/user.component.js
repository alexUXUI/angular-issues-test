import React from 'react'
import { Card } from 'semantic-ui-react'

const User = props => (
  <Card
    image={props.image}
    header={props.login}
    meta={props.type}
    description={props.url}
  />
)

export default User;
