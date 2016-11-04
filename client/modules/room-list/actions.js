import { withToken } from '../rsaa-helpers';
import rsaas from './rsaa';
import types from './constants';

const clear = function clear() {
  return { type: types.CLEAR };
};

/**
 * Gets index of rooms (roomName only)
 */
const index = function index() {
  return withToken(rsaas.index);
};

const update = function update() {
  return withToken(rsaas.update);
};

const startPolling = function startPolling() {
  return (dispatch) => {
    // const roomListPoller = setTimeout(() => dispatch(update()), 5000);
    // return dispatch(setPoller(roomListPoller));;
  };
};

export default {
  clear,
  index,
};
