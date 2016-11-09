import { CALL_API } from 'redux-api-middleware';

import types from './constants';

export default {
  index(token) {
    return {
      [CALL_API]: {
        endpoint: '/api/rooms',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        method: 'GET',
        types: [types.INDEX_REQUEST, types.INDEX_SUCCESS, types.INDEX_FAILURE],
      },
    };
  },
};
