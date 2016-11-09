import types from './constants';

const initialState = {
  checking: null,
  creating: null,
  checked: null,
  error: null,
  room: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.CREATE_REQUEST:
      return {
        ...state,
        creating: true,
      };
    case types.CREATE_FAILURE: {
      const error = 'Something went wrong... Try again?';
      return {
        ...state,
        creating: null,
        error,
      };
    }
    case types.CREATE_SUCCESS:
      return {
        ...state,
        creating: null,
        room: action.payload,
      };
    case types.GET_REQUEST:
      return {
        ...state,
        checking: true,
      };
    case types.GET_FAILURE:
      return {
        ...state,
        checking: null,
        checked: true,
        error: 'Failed to retrieve room...',
      };
    case types.GET_SUCCESS:
      return {
        ...state,
        checking: null,
        checked: true,
        room: action.payload,
      };
    case '@@router/LOCATION_CHANGE':
      return initialState;
    default:
      return state;
  }
}

export { default as actions } from './actions';
