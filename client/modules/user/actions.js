import { replace } from 'react-router-redux';

import { withToken } from '../rsaa-helpers';
import rsaas from './rsaa';

/**
 * Retrieves user info or redirects to /login on error
 */
const me = function me() {
  return (dispatch, getState) => withToken(rsaas.me)(dispatch, getState)
    .then(action => action.error && dispatch(replace('/login')))
    .catch(console.error); // eslint-disable-line no-console
};

export default {
  me,
};
