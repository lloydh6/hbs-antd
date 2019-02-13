import {
  PATIENT_CREATION_UPDATE_FIRST_NAME,
  PATIENT_CREATION_UPDATE_LAST_NAME,
  PATIENT_CREATION_UPDATE_EMAIL,
  PATIENT_CREATION_UPDATE_MOBILE,
} from '../../actions/actionTypes';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
};

const createPatient = (state = initialState, action) => {
  const nextState = { ...state };
  switch (action.type) {
    case PATIENT_CREATION_UPDATE_FIRST_NAME:
      nextState.firstName = action.payload;
      return nextState;
    case PATIENT_CREATION_UPDATE_LAST_NAME:
      nextState.lastName = action.payload;
      return nextState;
    case PATIENT_CREATION_UPDATE_EMAIL:
      nextState.email = action.payload;
      return nextState;
    case PATIENT_CREATION_UPDATE_MOBILE:
      nextState.mobile = action.payload;
      return nextState;
    default:
      return nextState;
  }
};

export default createPatient;
