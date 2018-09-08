import { actionTypes } from './Main.actions';

const initialState = {
  messageList: [],
  isProcessingMessage: false,
  errorCode: undefined,
};

const main = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.CREATE_MESSAGE.START:
      return {
        ...state,
        isProcessingMessage: true,
        errorCode: undefined,
      };
    case actionTypes.CREATE_MESSAGE.SUCCESS:
      return {
        ...state,
        messageList: [...payload, ...state.messageList],
        isProcessingMessage: false,
        errorCode: undefined,
      };
    case actionTypes.CREATE_MESSAGE.ERROR:
      return {
        ...state,
        isProcessingMessage: false,
        errorCode: payload,
      };
    case actionTypes.CLEAR_ERROR_CODE:
      return {
        ...state,
        errorCode: undefined,
      };
    default:
      return state;
  }
};

export default {
  main,
};
