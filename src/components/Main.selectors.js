import { createSelector } from 'reselect';

const getMainStates = (states) => {
  return states.main;
};

const getMessageList = createSelector(
  getMainStates,
  (states) => {
    return states.messageList;
  },
);

const getProcessingMessageStatus = createSelector(
  getMainStates,
  (states) => {
    return states.isProcessingMessage;
  },
);

const getErrorCode = createSelector(
  getMainStates,
  (states) => {
    return states.errorCode;
  },
);

export {
  getMessageList,
  getProcessingMessageStatus,
  getErrorCode,
};
