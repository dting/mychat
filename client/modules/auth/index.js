import types from './constants';

const initialState = {
  credentials: null,
  formError: null,
  formValue: null,
  loading: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.FORM_ON_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    case types.LOG_IN_REQUEST:
    case types.SIGN_UP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.LOG_IN_FAILURE: {
      let logInError = 'Log in failed... Try again!';
      try {
        logInError = action.payload.response.message || logInError;
      } catch (e) {
        console.log(e); // eslint-disable-line no-console
        if (!(e instanceof TypeError)) throw e;
      }
      return {
        ...state,
        loading: false,
        formError: logInError,
      };
    }
    case types.SIGN_UP_FAILURE: {
      let signUpError = 'Sign up failed... Try again!';
      try {
        const { payload: { response: { errors } } } = action;
        signUpError = (errors.username ? errors.username : errors.password).message;
      } catch (e) {
        if (!(e instanceof TypeError)) throw e;
      }
      return {
        ...state,
        loading: false,
        formError: signUpError,
      };
    }
    case '@@router/LOCATION_CHANGE':
      return {
        ...state,
        formError: null,
      };
    case types.CLEAR:
    case types.LOG_OUT:
    case types.LOG_IN_SUCCESS:
    case types.SIGN_UP_SUCCESS:
      return initialState;
    default:
      return state;
  }
}

export { default as actions } from './actions';
