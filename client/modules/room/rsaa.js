import { CALL_API } from 'redux-api-middleware';

import types from './constants';

export default {
  get(token, roomName) {
    return {
      [CALL_API]: {
        endpoint: `/api/rooms/${roomName}`,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        method: 'GET',
        types: [
          types.GET_REQUEST,
          types.GET_SUCCESS,
          types.GET_FAILURE
        ],
      },
    };
  },
  create(token, roomName) {
    return {
      [CALL_API]: {
        endpoint: '/api/rooms',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        method: 'POST',
        types: [
          types.CREATE_REQUEST,
          types.CREATE_SUCCESS,
          types.CREATE_FAILURE
        ],
        body: JSON.stringify({ roomName }),
      },
    };
  },
}
