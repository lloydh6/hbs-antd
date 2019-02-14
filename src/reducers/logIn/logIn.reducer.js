import { WEBSITE_LOG_IN_UPDATE_EMAIL, WEBSITE_LOG_IN_UPDATE_PASSWORD } from '../../actions/actionTypes';

const initialState = {
  email: '',
  password: '',
};

const login = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case WEBSITE_LOG_IN_UPDATE_EMAIL:
      newState.email = action.payload;
      return newState;
    case WEBSITE_LOG_IN_UPDATE_PASSWORD:
      newState.password = action.payload;
      return newState;
    default:
      return newState;
  }
};

export default login;
