import types from './constants';

const initialState = {
  initialized: null,
  loading: null,
  creating: null,
  error: null,
  messages: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.INITIALIZE:
      return {
        ...state,
        initialized: true,
      }
    case types.CREATE_REQUEST:
      return {
        ...state,
        creating: true,
      };
    case types.CREATE_FAILURE:
      return {
        ...state,
        creating: null,
        error: 'Failed to create messages...',
      };
    case types.CREATE_SUCCESS:
      return {
        ...state,
        creating: null,
      };
    case types.GET_REQUEST:
      return {
        ...state,
        initialized: true,
      };
    case types.GET_FAILURE:
      return {
        ...state,
        checked: true,
        error: 'Failed to retrieve room messages...',
      };
    case types.GET_SUCCESS:
      return {
        ...state,
        checked: true,
        messages: action.payload,
      };
    case '@@router/LOCATION_CHANGE':
      return initialState;
    default:
      return state;
  }
}

export { default as actions } from './actions';
