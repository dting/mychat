import { convertFromRaw, EditorState } from 'draft-js';
import DraftEditor from 'draft-js-plugins-editor';
import moment from 'moment';
import React from 'react';

class MessageListItem extends React.Component {
  static propTypes = {
    contents: React.PropTypes.string.isRequired,
    createdAt: React.PropTypes.string.isRequired,
    createdBy: React.PropTypes.shape({
      username: React.PropTypes.string.isRequired,
    }).isRequired,
    emojiPlugin: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    linkifyPlugin: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };

  constructor(props) {
    super(props);
    const rawContents = convertFromRaw(JSON.parse(this.props.contents));
    this.state = {
      editorState: EditorState.createWithContent(rawContents),
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(editorState) {
    this.setState({ editorState });
  }

  render() {
    const { createdAt, createdBy, emojiPlugin, linkifyPlugin } = this.props;
    return (
      <div className="message">
        <div className="message_meta__author">@{createdBy.username}</div>
        <div className="message__contents">
          <DraftEditor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={[emojiPlugin, linkifyPlugin]}
            readOnly
          />
        </div>
        <div className="message_meta">
          <div className="message_meta__ago">({moment(createdAt).fromNow()})</div>
          <div className="message_meta__time">{moment(createdAt).format('hh:mm:ss a')}</div>
        </div>
      </div>
    );
  }
}

export default MessageListItem;
