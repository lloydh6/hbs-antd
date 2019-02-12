import { PATIENT_LOOKUP_UPDATE_EMAIL, PATIENT_LOOKUP_UPDATE_MOBILE } from '../actionTypes';

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
