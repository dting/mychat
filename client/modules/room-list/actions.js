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

export default {
  clear,
  index,
};
