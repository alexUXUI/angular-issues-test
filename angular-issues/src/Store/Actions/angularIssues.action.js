import { appIsFetching, appIsNotFetching } from './ui.action';
import { FETCH_ANGULAR_ISSUES_SUCCESS, FETCH_ANGULAR_ISSUES_FAIL } from '../Constants/';
import axios from 'axios';
import moment from 'moment';

export const fetchAngularIssues = payload => (dispatch, getState) => {

  dispatch(appIsFetching(null));

  const oneWeekAgo = moment().subtract(7,'d').format('YYYY-MM-DDThh:mm:ssZ');

  const REQUEST_URL = `https://api.github.com/repos/angular/angular/issues?since=${oneWeekAgo}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`;

  const REQUEST = {
    method: 'GET',
    mode: 'cors',
    headers: new Headers({
      'content-type': 'application/json',
    }),
  };

  return axios(REQUEST_URL, REQUEST).then(response => {
    if (response.status >= 200 && response.status < 300) {
      dispatch(fetchAngularIssuesSuccess(response));
      dispatch(appIsNotFetching(null));
    } else {
      dispatch(fetchAngularIssuesFail(null));
      dispatch(appIsNotFetching(null));
    }
  }).catch(error => {
    console.warn('There was an error fetching Angular issues');
    dispatch(fetchAngularIssuesFail(null));
    dispatch(appIsNotFetching(null));
  });
};

export const fetchAngularIssuesSuccess = payload => ({
  type: FETCH_ANGULAR_ISSUES_SUCCESS,
  payload,
});

export const fetchAngularIssuesFail = payload => ({
  type: FETCH_ANGULAR_ISSUES_FAIL,
  payload,
});
