import { PATIENT_LOOKUP_UPDATE_EMAIL, PATIENT_LOOKUP_UPDATE_MOBILE, PATIENT_LOOKUP_INITIALIZE } from '../actionTypes';

export function initializeComponent() {
  return {
    type: PATIENT_LOOKUP_INITIALIZE,
  };
}

export function updateEmail(value) {
  return {
    type: PATIENT_LOOKUP_UPDATE_EMAIL,
    payload: value,
  };
}

export function updateMobileNumber(value) {
  return {
    type: PATIENT_LOOKUP_UPDATE_MOBILE,
    payload: value,
  };
}
