import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import stringHash from 'string-hash';
import cx from 'classnames';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { actions } from './Main.actions';
import { getMessageList, getProcessingMessageStatus, getErrorCode } from './Main.selectors';
import Input from './main/Input';
import Button from './main/Button';
import MessageCard from './main/MessageCard';
import { ERROR, MAX_CHARS } from './Main.constants';
import { ERROR as globalError } from '../constants';

import styles from './Main.styles';

class Main extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };
  }

  onTypingMessage = (event) => {
    if (this.props.errorCode !== undefined) {
      this.props.clearErrorCode();
    }
    const message = event.target.value;
    this.setState({ message });
  }

  onSendMessage = () => {
    this.props.createMessage(this.state.message);
  }

  getErrorMessage = () => {
    const { errorCode } = this.props;

    switch (errorCode) {
      case ERROR.EMPTY_INPUT:
        return 'Please input something!';
      case globalError.WORD_TOO_LONG:
        return `Your message contains word longer ${MAX_CHARS} characters. Please review!`;
      default:
        return undefined;
    }
  }

  render() {
    const { classes, messageList, isProcessingMessage } = this.props;
    const { message } = this.state;

    return (
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="headline" className={classes.headline}>Tweeter</Typography>
          <div className={classes.messageForm}>
            <Input
              value={message}
              label="Input your message"
              onChange={this.onTypingMessage}
              disabled={isProcessingMessage}
              errorMessage={this.getErrorMessage()}
              autoFocus
            />
            <Button
              label="Send"
              onClick={this.onSendMessage}
              disabled={isProcessingMessage}
            />
          </div>
          <Paper className={classes.messageViewer}>
            <div className={cx(classes.messageViewer, classes.messageViewerInner)}>
              {messageList.map((oneMessage, index) => {
                return <MessageCard key={stringHash(`${index}-${oneMessage}`)} message={oneMessage} />;
              })}
            </div>
          </Paper>
        </Paper>
      </main>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  createMessage: PropTypes.func.isRequired,
  messageList: PropTypes.array.isRequired,
  isProcessingMessage: PropTypes.bool.isRequired,
  clearErrorCode: PropTypes.func.isRequired,
  errorCode: PropTypes.string,
};

Main.defaultProps = {
  errorCode: undefined,
};

const mapStatesToProps = createStructuredSelector({
  messageList: getMessageList,
  isProcessingMessage: getProcessingMessageStatus,
  errorCode: getErrorCode,
});

const mapDispatchersToProps = (dispatch) => {
  return {
    createMessage: (payload) => { dispatch(actions.createMessage.start(payload)); },
    clearErrorCode: () => { dispatch(actions.clearErrorCode()); },
  };
};

export default compose(
  withStyles(styles),
  connect(mapStatesToProps, mapDispatchersToProps),
)(Main);
