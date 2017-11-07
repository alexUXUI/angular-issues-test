// React
import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow, render } from 'enzyme';

// Component to test
import StatusLabel from './label.component';

// Redux
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

// Utils
import { inspect } from 'util';

// Redux config
const middlewares = [];
const mockStore = configureStore(middlewares);

import mockData from '../../../mockData';

const mockDefaultState = {
  angularIssues: {
    issues: mockData,
  },
  ui: {
    isFetching: false,
  }
}

describe('<StatusLabel>', () => {

  let store, component, div, issues;

  beforeEach(() => {
    store = mockStore(mockDefaultState);
    div = document.createElement('div');

    document.body.appendChild(div);

    component = mount(
      <StatusLabel label={'closed'}/>
    );
  });

  it('has the right props', () => {
    const { label } = component.props();
    expect(component.is('StatusLabel'));
    expect(label).toBe('closed');
  });

});
