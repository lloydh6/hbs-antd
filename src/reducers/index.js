import { combineReducers } from 'redux';

import header from './header/header.reducer';
import patientLookup from './patientLookup/patientLookup.reducer';

const lucyApp = combineReducers({
  header,
  patientLookup,
});

export default lucyApp;
