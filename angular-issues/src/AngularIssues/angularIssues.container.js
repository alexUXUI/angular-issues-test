import React from 'react';
import { connect } from 'react-redux';
import { fetchAngularIssues } from '../Store/Actions/angularIssues.action';
import { Header, Button, Segment, Dimmer, Loader } from 'semantic-ui-react';
import Issue from '../Issue/issue.component';
import './angularIssues.css';
import { ANGULAR_LOGO_URL } from '../Store/Constants';

const AngularIssuesContainer = props =>  {

  const { isFetching, angularIssues, fetchAngularIssues } = props;

  const renderIssues = angularIssues => {
    if (angularIssues != null) {
      return angularIssues.map(angularIssue =>
        <Issue
          angularIssue={angularIssue}
          key={angularIssue.id}
        />
      );
    } else {
      return (
        <div className='issues--skeleton'>
          Please click the button to fetch some issues.
        </div>
      );
    }
  }

  return(
    <div className='issues'>
      <Header as='h1' attached='top'>
        <span>
          Angular <img className='angular--logo' src={ANGULAR_LOGO_URL}/> Issues
        </span>
      </Header>
      <Segment attached>
        <Button
          onClick={event => {
            event.preventDefault();
            fetchAngularIssues();
          }}
          content='Fetch Angular Issues'
          icon='right arrow'
          labelPosition='right'
          loading={isFetching}
          color='blue'
        />
      </Segment>
      <Segment attached='top'>
        <Dimmer active={isFetching}>
          <Loader content='Loading' />
        </Dimmer>
          {renderIssues(angularIssues)}
      </Segment>
    </div>
  );
};

const mapStateToProps = state => ({
  angularIssues: state.angularIssues.issues,
  isFetching: state.ui.isFetching,
});

const mapDispatchToProps = dispatch => ({
  fetchAngularIssues: () => dispatch(fetchAngularIssues()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AngularIssuesContainer);
