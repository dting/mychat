import types from './constants';

const roomNameComparator = function roomNameComparator(a, b) {
  if (a.roomName > b.roomName) {
    return 1;
  }
  if (a.roomName < b.roomName) {
    return -1;
  }
  return 0;
};

const initialState = {
  loading: null,
  error: null,
  rooms: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.CLEAR:
      return initialState;
    case types.INDEX_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.INDEX_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'Failed to retrieve room list...',
      };
    case types.INDEX_SUCCESS:
      const rooms = action.payload.sort(roomNameComparator);
      return {
        ...state,
        loading: false,
        rooms,
      };
    default:
      return state;
  }
}

export { default as actions } from './actions';
