import types from './constants';

const clear = function clear() {
  return {
    type: types.CLEAR,
  };
};

const onChange = function onChange(editorState) {
  return {
    type: types.ON_CHANGE,
    payload: editorState,
  };
};

export default {
  clear,
  onChange,
};
