import authTypes from '../auth/constants';

const initialState = '';

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case authTypes.LOG_OUT:
    case authTypes.LOG_IN_FAILURE:
    case authTypes.SIGN_UP_FAILURE:
      return initialState;
    case authTypes.LOG_IN_SUCCESS:
    case authTypes.SIGN_UP_SUCCESS:
      return action.payload.token;
    default:
      return state;
  }
}
