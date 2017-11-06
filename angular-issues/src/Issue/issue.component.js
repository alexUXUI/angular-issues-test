// React
import React from 'react';

// Components
import User from './User/user.component';
import GithubMenu from './Menu/menu.component';

// Style lib
import { Grid, Image, Container, Header, Segment, Divider } from 'semantic-ui-react';

const Issue = (props) => {

  const { angularIssue } = props;

  return (
    <span>
      <Grid stackable container columns={3}>
        <Grid.Column >
          <User
            image={angularIssue.user.avatar_url}
            url={angularIssue.user.url}
            login={angularIssue.user.login}
            type={angularIssue.user.type}
          />
        </Grid.Column>
        <Grid.Column >
          <Header as='h5'>{angularIssue.title}</Header>
          <p className='issue issue--body'>{angularIssue.body}</p>
        </Grid.Column>
        <Grid.Column>
          <GithubMenu
            label={angularIssue.state}
            number={angularIssue.number}
            createdAt={angularIssue.created_at}
            updatedAt={angularIssue.updated_at}
            comments={angularIssue.comments_url}
          />
        </Grid.Column>
      </Grid>
      <Divider section />
    </span>
  );
}

export default Issue;
