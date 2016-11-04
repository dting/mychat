import { replace } from 'react-router-redux';

import { withToken } from '../rsaa-helpers';
import rsaas from './rsaa';
import types from './constants';

const clear = function clear() {
  return { type: types.CLEAR };
};

/**
 * Retrieves user info or redirects to /login on error
 */
const me = function me() {
  return (dispatch, getState) => withToken(rsaas.me)(dispatch, getState)
    .then(action => action.error && dispatch(replace('/login')))
    .catch(console.error);
};

export default {
  me,
};
