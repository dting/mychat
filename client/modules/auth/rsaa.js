import { CALL_API } from 'redux-api-middleware';

import types from './constants';

export default {
  logIn(credentials) {
    return {
      [CALL_API]: {
        endpoint: '/api/auth/local',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        types: [
          types.LOG_IN_REQUEST,
          types.LOG_IN_SUCCESS,
          types.LOG_IN_FAILURE,
        ],
        body: JSON.stringify(credentials),
      },
    };
  },
  signUp(credentials) {
    return {
      [CALL_API]: {
        endpoint: '/api/users',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        types: [
          types.SIGN_UP_REQUEST,
          types.SIGN_UP_SUCCESS,
          types.SIGN_UP_FAILURE,
        ],
        body: JSON.stringify(credentials),
      },
    };
  },
};
