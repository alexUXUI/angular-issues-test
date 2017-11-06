import { UI_IS_FETCHING, UI_IS_NOT_FETCHING } from '../Constants/';

export const appIsFetching = payload => ({
  type: UI_IS_FETCHING,
  payload,
});

export const appIsNotFetching = payload => ({
  type: UI_IS_NOT_FETCHING,
  payload,
});
