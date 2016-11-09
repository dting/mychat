import { rsaaActionTypes } from '../rsaa-helpers';

const rsaaTypes = rsaaActionTypes(['LOG_IN', 'SIGN_UP'], 'auth');

export default {
  CLEAR: 'auth/CLEAR',
  FORM_ON_CHANGE: 'auth/FORM_ON_CHANGE',
  LOG_OUT: 'auth/LOG_OUT',
  ...rsaaTypes,
};
