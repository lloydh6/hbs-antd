import { combineReducers } from 'redux';

import header from './header/header.reducers';

const lucyApp = combineReducers({
  header,
});

export default lucyApp;
