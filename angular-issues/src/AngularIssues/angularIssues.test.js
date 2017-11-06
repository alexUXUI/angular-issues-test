// React
import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow, render } from 'enzyme';

// Component to test
import AngularIssuesContainer from './angularIssues.container';

// Redux
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

// Utils
import { inspect } from 'util';

// Redux config
const middlewares = [];
const mockStore = configureStore(middlewares);
const mockDefaultState = {
  angularIssues: 'there are no issues -- sike!'
}

describe('<AngularIssuesContainer>', () => {

  let store, component, div;

  beforeEach(() => {
    store = mockStore(mockDefaultState);
    div = document.createElement('div');

    document.body.appendChild(div);

    component = mount(
      <Provider store={store}>
        <AngularIssuesContainer />
      </Provider>
    );
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    const store = mockStore(mockDefaultState);
    ReactDOM.render(
      <Provider store={store}>
        <AngularIssuesContainer />
      </Provider>, div
    );
  });

  it('Has the correct children', () => {

    const wrapperTwo = render(
      <Provider store={store}>
        <AngularIssuesContainer />
      </Provider>
    );

    var thingTwo = wrapperTwo.find('.issues__header');
  })

});
