import { replace } from 'react-router-redux';

import { withToken } from '../rsaa-helpers';
import rsaas from './rsaa';

/**
 * Gets a specific room by roomName.
 *
 * If room doesn't exist, transition to create route.
 */
const get = function get(roomName) {
  return (dispatch, getState) => withToken(rsaas.get, roomName)(dispatch, getState)
    .then((action) => {
      if (action.error && action.payload.status === 404) {
        return dispatch(replace(`/r/${roomName}/create`));
      }
      return action;
    })
    .catch(console.error); // eslint-disable-line no-console
};

/**
 * Create a room with roomName.
 *
 * If room is created or already exists, transition to room.
 */
const create = function create(roomName) {
  return (dispatch, getState) => withToken(rsaas.create, roomName)(dispatch, getState)
    .then((action) => {
      if (!action.error || action.payload.response.code === 11000) {
        return dispatch(replace(`/r/${roomName}/`));
      }
      return action;
    })
    .catch(console.error); // eslint-disable-line no-console
};

export default {
  create,
  get,
};
