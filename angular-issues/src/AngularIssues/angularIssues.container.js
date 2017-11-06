import React from 'react';
import { connect } from 'react-redux';
import { fetchAngularIssues } from '../Store/Actions/angularIssues.action';
import { Header, Button, Segment, Dimmer, Loader } from 'semantic-ui-react';
import Issue from '../Issue/issue.component';
import './angularIssues.css';

class AngularIssuesContainer extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  fetchAngularIssues() {
    return this.props.fetchAngularIssues();
  }

  // componentWillMount() {
  //   return this.props.fetchAngularIssues();
  // }

  renderIssues() {
    if(this.props.angularIssues != null) {
      return this.props.angularIssues.map((angularIssue, index) =>
        <Issue angularIssue={angularIssue} key={angularIssue.id}/>
      )
    } else {
      return (
        <div className='issues--skeleton'>Please click the button to fetch some issues.</div>
      );
    }
  }

  render() {

    const { isFetching } = this.props;

    return(
      <div className='issues'>
        <Header as='h1' attached='top'>
          <span>
            Angular <img className='angular--logo' src='https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg'/> Issues 🐛
          </span>
        </Header>
        <Segment attached>
          <Button
            onClick={event => {
              event.preventDefault();
              this.fetchAngularIssues();
            }}
            content='Fetch Angular Issues'
            icon='right bug'
            labelPosition='right'
            loading={isFetching}
            color='blue'
          />
        </Segment>
        <Segment attached='top'>
          <Dimmer active={isFetching}>
            <Loader content='Loading' />
          </Dimmer>
            {
              this.renderIssues()
            }
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  angularIssues: state.angularIssues.issues,
  isFetching: state.ui.isFetching,
});

const mapDispatchToProps = dispatch => ({
  fetchAngularIssues: () => dispatch(fetchAngularIssues()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AngularIssuesContainer);
