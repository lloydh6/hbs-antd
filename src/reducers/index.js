import { combineReducers } from 'redux';

import header from './header/header.reducer';
import patientLookup from './patientLookup/patientLookup.reducer';
import createPatient from './createPatient/createPatient.reducer';
import login from './logIn/logIn.reducer';
import authentication from './authentication/authentication.reducer';

const lucyApp = combineReducers({
  header,
  patientLookup,
  createPatient,
  login,
  authentication,
});

export default lucyApp;
