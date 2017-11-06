import { combineReducers } from 'redux';
import angularIssues from './angularIssues.reducer';
import UIReducer from './ui.reducer';

const rootReducer = combineReducers({
  angularIssues: angularIssues,
  ui: UIReducer,
});

export default rootReducer;
