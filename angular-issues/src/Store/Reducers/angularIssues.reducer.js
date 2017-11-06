import {inspect} from 'util';

export default function(state = {
  issues: null
}, action) {

  switch (action.type) {

    case 'FETCH/ANGULAR_ISSUES/SUCCESS': {

      console.log('all up in angular issues reducer SUCCESS', inspect(action.payload));

      const { data } = action.payload;

      return {
        ...state,
        issues: data,
        getIssuesSuccess: true,
      }
    }

    case 'FETCH/ANGULAR_ISSUES/FAIL': {

      console.log('all up in angular issues reducer FAIL', inspect(action.payload));

      const { payload } = action;

      return {
        ...state,
        issues: null,
        getIssuesSuccess: false,
      }
    }

    default:
      return state;
  }

}
