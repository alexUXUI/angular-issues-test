export default function(state = {
  isFetching: false
}, action) {

  switch (action.type) {

    case 'UI/IS_FETCHING': {
      const { payload } = action;

      return {
        ...state,
        isFetching: true
      }
    }

    case 'UI/IS_NOT_FETCHING': {
      const { payload } = action;

      return {
        ...state,
        isFetching: false
      }
    }

    default:
      return state;
  }

}
