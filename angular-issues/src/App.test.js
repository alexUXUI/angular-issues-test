import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow, render } from 'enzyme';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import mockData from './mockData';

const mockDefaultState = {
  angularIssues: {
    issues: mockData,
  }, 
  ui: {
    isFetching: false,
  }
}

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('<App>', () => {

  let store, component, div;

  beforeEach(() => {

    store = mockStore(mockDefaultState);
    div = document.createElement('div');

    document.body.appendChild(div);

    component = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it('renders without crashing', () => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>, div
    );
  });

});
