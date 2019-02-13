import {
  PATIENT_CREATION_UPDATE_FIRST_NAME,
  PATIENT_CREATION_UPDATE_LAST_NAME,
  PATIENT_CREATION_UPDATE_EMAIL,
  PATIENT_CREATION_UPDATE_MOBILE,
} from '../actionTypes';

export function updateFirstName(value) {
  return {
    type: PATIENT_CREATION_UPDATE_FIRST_NAME,
    payload: value,
  };
}

export function updateLastName(value) {
  return {
    type: PATIENT_CREATION_UPDATE_LAST_NAME,
    payload: value,
  };
}

export function updateEmail(value) {
  return {
    type: PATIENT_CREATION_UPDATE_EMAIL,
    payload: value,
  };
}

export function updateMobile(value) {
  return {
    type: PATIENT_CREATION_UPDATE_MOBILE,
    payload: value,
  };
}
