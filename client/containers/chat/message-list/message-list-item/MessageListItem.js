import moment from 'moment';
import React, { Component } from 'react';
import { convertFromRaw, EditorState } from 'draft-js';
import DraftEditor from 'draft-js-plugins-editor';

class MessageListItem extends Component {
  componentWillMount() {
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
    const { contents, createdAt, createdBy, emojiPlugin, linkifyPlugin } = this.props;
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
