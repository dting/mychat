import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import DraftEditor from 'draft-js-plugins-editor';
import React, { Component } from 'react';

import { actions } from '../../../modules';
import { RoundedButton } from '../../../components';

const positionSuggestions = function() {
  return {
    bottom: 0,
    left: '-220px',
    transform: 'scale(1)',
    width: '220px',
    'max-width': '220px',
  };
};
const emojiPlugin = createEmojiPlugin({ positionSuggestions });
const linkifyPlugin = createLinkifyPlugin({ target: "_blank" });
const plugins = [emojiPlugin, linkifyPlugin];
const { EmojiSuggestions } = emojiPlugin;

class Editor extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(editorState) {
    this.props.onChange(editorState);
    this.forceUpdate();
  }

  render() {
    const { editorState, sending } = this.props;
    return (
      <div className="chat_editor">
        <DraftEditor
          editorState={editorState}
          onChange={this.onChange}
          plugins={plugins}
        />
        <EmojiSuggestions />
        <RoundedButton onClick={this.props.sendMessage} dark disabled={sending}>
          Send
        </RoundedButton>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.editor,
  sending: state.message.creating,
});

const mapDispatchToProps = dispatch => ({
  onChange: bindActionCreators(actions.editor.onChange, dispatch),
  sendMessage: bindActionCreators(actions.message.create, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
