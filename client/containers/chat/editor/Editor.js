import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import DraftEditor from 'draft-js-plugins-editor';
import React from 'react';

import { actions } from '../../../modules';
import { RoundedButton } from '../../../components';

const positionSuggestions = function positionSuggestions() {
  return {
    bottom: 0,
    left: '-220px',
    transform: 'scale(1)',
    width: '220px',
    'max-width': '220px',
  };
};
const emojiPlugin = createEmojiPlugin({ positionSuggestions });
const linkifyPlugin = createLinkifyPlugin({ target: '_blank' });
const plugins = [emojiPlugin, linkifyPlugin];
const { EmojiSuggestions } = emojiPlugin;

class Editor extends React.Component {
  static propTypes = {
    editorState: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    onChange: React.PropTypes.func.isRequired,
    sending: React.PropTypes.bool,
    sendMessage: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(editorState) {
    this.props.onChange(editorState);
    this.forceUpdate();
  }

  render() {
    const { editorState, sending, sendMessage } = this.props;
    return (
      <div className="chat_editor">
        <DraftEditor
          editorState={editorState}
          onChange={this.onChange}
          plugins={plugins}
        />
        <EmojiSuggestions />
        <RoundedButton onClick={sendMessage} dark disabled={sending}>
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
