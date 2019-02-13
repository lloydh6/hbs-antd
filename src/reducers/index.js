import { combineReducers } from 'redux';

import header from './header/header.reducer';
import patientLookup from './patientLookup/patientLookup.reducer';
import createPatient from './createPatient/createPatient.reducer';

const lucyApp = combineReducers({
  header,
  patientLookup,
  createPatient,
});

export default lucyApp;
