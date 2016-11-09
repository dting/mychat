import { EditorState, ContentState } from 'draft-js';

import messageTypes from '../message/constants';
import types from './constants';

const initialState = { editorState: EditorState.createEmpty() };

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.CLEAR:
      return initialState;
    case types.ON_CHANGE:
      return {
        ...state,
        editorState: action.payload,
      };
    case messageTypes.CREATE_SUCCESS:
    case '@@router/LOCATION_CHANGE':
      return {
        editorState: EditorState.push(
          state.editorState,
          ContentState.createFromText(''),
          'change-block-data',
        ),
      };
    default:
      return state;
  }
}

export { default as actions } from './actions';
