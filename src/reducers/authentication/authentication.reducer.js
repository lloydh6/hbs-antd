import { WEBSITE_LOG_IN_COMPLETE_SUCCESS } from '../../actions/actionTypes';

const initialState = {
  isAuthenticated: true,
};

const authentication = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case WEBSITE_LOG_IN_COMPLETE_SUCCESS:
      newState.isAuthenticated = true;
      return newState;
    default:
      return newState;
  }
};

export default authentication;
