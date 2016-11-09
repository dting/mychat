import { convertToRaw } from 'draft-js';

export default {
  rawContentState(editorState) {
    if (!editorState) {
      return null;
    }
    const contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      return null;
    }
    return JSON.stringify(convertToRaw(contentState));
  },
};
