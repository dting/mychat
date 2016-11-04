import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import React, { Component } from 'react';

import { actions } from '../../../modules';
import MessageListItem from './message-list-item/MessageListItem';

const emojiPlugin = createEmojiPlugin();
const linkifyPlugin = createLinkifyPlugin({ target: "_blank" });

/**
 * Firefox and Chrome have flexbox implementations that are at odds in regard
 * to overflow and flex-direction: column-reverse.
 *
 * http://stackoverflow.com/a/34345634
 */
class MessageList extends Component {
  componentWillMount() {
    this.checkMessages();
    this.poller = setInterval(() => this.checkMessages() , 1500);
  }

  componentDidUpdate() {
    // Immediately fetch messages when switching between rooms
    if (!this.props.message.initialized) {
      this.checkMessages();
    }
  }

  componentDidMount() {
    document.querySelector('.scroll-wrapper').addEventListener('wheel', this.onScroll);
  }

  componentWillUnmount() {
    document.querySelector('.scroll-wrapper').removeEventListener('wheel', this.onScroll);
    clearInterval(this.poller);
  }

  checkMessages() {
    return this.props.messageActions.get(this.props.roomName);
  }

  /**
   * Reverses the scroll direction because the message area is actually flipped upside down
   */
  onScroll(evt) {
    if(evt.deltaY) {
      evt.preventDefault();
      const fontSize = parseFloat(getComputedStyle(evt.currentTarget).getPropertyValue('font-size'));
      evt.currentTarget.scrollTop -= fontSize * (evt.deltaY < 0 ? -1 : 1) * 2.5;
    }
  }

  render() {
    const { messages } = this.props.message;
    return (
      <div className="message-list">
        <div className="scroll-wrapper">
          <div className="messages">
            {messages && messages.map(message => (
              <MessageListItem  key={message._id}
                {...message}
                emojiPlugin={emojiPlugin}
                linkifyPlugin={linkifyPlugin}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.message,
});

const mapDispatchToProps = dispatch => ({
  messageActions: bindActionCreators(actions.message, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
