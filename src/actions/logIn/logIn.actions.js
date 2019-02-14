import { WEBSITE_LOG_IN_UPDATE_EMAIL, WEBSITE_LOG_IN_UPDATE_PASSWORD, WEBSITE_LOG_IN_COMPLETE_SUCCESS } from '../actionTypes';

export function updateEmail(value) {
  return {
    type: WEBSITE_LOG_IN_UPDATE_EMAIL,
    payload: value,
  };
}

export function updatePassword(value) {
  return {
    type: WEBSITE_LOG_IN_UPDATE_PASSWORD,
    payload: value,
  };
}

export function logIn() {
  return {
    type: WEBSITE_LOG_IN_COMPLETE_SUCCESS,
  };
}
