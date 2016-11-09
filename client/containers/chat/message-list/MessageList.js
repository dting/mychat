import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import React from 'react';

import { actions } from '../../../modules';
import MessageListItem from './message-list-item/MessageListItem';

const emojiPlugin = createEmojiPlugin();
const linkifyPlugin = createLinkifyPlugin({ target: '_blank' });

/**
 * Firefox and Chrome have flexbox implementations that are at odds in regard
 * to overflow and flex-direction: column-reverse.
 *
 * http://stackoverflow.com/a/34345634
 */
class MessageList extends React.PureComponent {
  static propTypes = {
    message: React.PropTypes.shape({
      initialized: React.PropTypes.bool,
      messages: React.PropTypes.arrayOf(React.PropTypes.shape({
        _id: React.PropTypes.string.isRequired,
      })).isRequired,
    }),
    messageActions: React.PropTypes.shape({
      get: React.PropTypes.func.isRequired,
    }),
    roomName: React.PropTypes.string.isRequired,
  };

  /**
   * Reverses the scroll direction because the message area is actually flipped upside down
   */
  static onScroll(e) {
    if (e.deltaY) {
      e.preventDefault();
      const size = parseFloat(window.getComputedStyle(e.currentTarget).getPropertyValue('font-size'));
      /* eslint-disable no-param-reassign */
      e.currentTarget.scrollTop -= size * (e.deltaY < 0 ? -1 : 1) * 2.5;
      /* eslint-enable */
    }
  }

  componentWillMount() {
    this.checkMessages();
    this.poller = setInterval(() => this.checkMessages(), 1500);
  }

  componentDidMount() {
    document.querySelector('.scroll-wrapper').addEventListener('wheel', MessageList.onScroll);
  }

  componentDidUpdate() {
    // Immediately fetch messages when switching between rooms
    if (!this.props.message.initialized) {
      this.checkMessages();
    }
  }

  componentWillUnmount() {
    document.querySelector('.scroll-wrapper').removeEventListener('wheel', this.onScroll);
    clearInterval(this.poller);
  }

  checkMessages() {
    return this.props.messageActions.get(this.props.roomName);
  }

  render() {
    const { messages } = this.props.message;
    return (
      <div className="message-list">
        <div className="scroll-wrapper">
          <div className="messages">
            {messages && messages.map(message => (
              <MessageListItem
                key={message._id}
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
