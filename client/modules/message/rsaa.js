import { CALL_API } from 'redux-api-middleware';

import types from './constants';

export default {
  create(token, roomName, contents) {
    return {
      [CALL_API]: {
        endpoint: `/api/rooms/${roomName}/messages`,
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        types: [
          types.CREATE_REQUEST,
          types.CREATE_SUCCESS,
          types.CREATE_FAILURE,
        ],
        body: JSON.stringify({ contents }),
      },
    };
  },
  get(token, roomName) {
    return {
      [CALL_API]: {
        endpoint: `/api/rooms/${roomName}/messages`,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        method: 'GET',
        types: [
          types.GET_REQUEST,
          types.GET_SUCCESS,
          types.GET_FAILURE,
        ],
      },
    };
  },
}
