import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/RootReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancer(
  applyMiddleware(thunk),
);

const INITIAL_STATE = {
  angularIssuesInitialState: 'need to fetch issues from github.',
};

const Store = createStore(rootReducer, INITIAL_STATE, enhancer);

export default Store;
