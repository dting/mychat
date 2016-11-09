import { withToken } from '../rsaa-helpers';
import draftHelpers from './draft-helpers';
import rsaas from './rsaa';

/**
 * Sends RSAA with current jwt token, roomName, and args
 */
const withRoomName = function withRoomName(rsaa, ...args) {
  return (dispatch, getState) => {
    const roomName = (getState().room.room || {}).roomName;
    if (roomName) {
      return withToken(rsaa, roomName, ...args)(dispatch, getState);
    }
    return undefined;
  };
};

/**
 * Gets messages for current room
 */
const get = function get() {
  return withRoomName(rsaas.get);
};

/**
 * Create a message in the current room using editor contents
 */
const create = function create() {
  return (dispatch, getState) => {
    const { editor } = getState();
    const contents = draftHelpers.rawContentState(editor.editorState);
    if (contents) {
      return withRoomName(rsaas.create, contents)(dispatch, getState)
        .then(action => !action.error, dispatch(get()));
    }
    return undefined;
  };
};

export default {
  create,
  get,
};
