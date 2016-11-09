import { replace } from 'react-router-redux';

import rsaas from './rsaa';
import types from './constants';

const clear = function formClear() {
  return {
    type: types.CLEAR,
  };
};

const formOnChange = function formOnChange(payload) {
  return {
    type: types.FORM_ON_CHANGE,
    payload,
  };
};

/**
 * Returns function for RSAA that dispatch the action if credentials exist
 *
 * Redirects to default room  at /r/ on success
 *
 * @param {func} rsaa - action to dispatch
 */
const withCredentials = function withCredentials(rsaa) {
  return (dispatch, getState) => {
    const { auth } = getState();
    if (auth.credentials) {
      return dispatch(rsaa(auth.credentials))
        .then(action => !action.error && dispatch(replace('/r/')))
        .catch(console.error); // eslint-disable-line no-console
    }
    return undefined;
  };
};

const logIn = function login() {
  return withCredentials(rsaas.logIn);
};

const logOut = function logout() {
  return (dispatch) => {
    dispatch({
      type: types.LOG_OUT,
    });
    dispatch(replace('/login'));
  };
};

const signUp = function signUp() {
  return withCredentials(rsaas.signUp);
};

export default {
  clear,
  formOnChange,
  logIn,
  logOut,
  signUp,
};
