import { PATIENT_LOOKUP_UPDATE_EMAIL, PATIENT_LOOKUP_UPDATE_MOBILE, PATIENT_LOOKUP_INITIALIZE } from '../../actions/actionTypes';

const initialState = {
  email: '',
  mobileNumber: '',
};

const patientLookup = (state = initialState, action) => {
  let nextState = { ...state };
  switch (action.type) {
    case PATIENT_LOOKUP_UPDATE_EMAIL:
      nextState.email = action.payload;
      return nextState;
    case PATIENT_LOOKUP_UPDATE_MOBILE:
      nextState.mobileNumber = action.payload;
      return nextState;
    case PATIENT_LOOKUP_INITIALIZE:
      nextState = { ...initialState };
      return nextState;
    default:
      return nextState;
  }
};

export default patientLookup;
