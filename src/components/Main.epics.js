import { actionTypes, actions } from './Main.actions';
import { ERROR, MAX_CHARS } from './Main.constants';
import splitMessage from '../utils/splitMessage';

export const mainEpic = (action$) => {
  return action$.ofType(actionTypes.CREATE_MESSAGE.START)
    .map(({ payload: message = '' }) => {
      if (message.length === 0) return actions.createMessage.error(ERROR.EMPTY_INPUT);
      try {
        return actions.createMessage.success(splitMessage(message, MAX_CHARS));
      } catch (errorCode) {
        return actions.createMessage.error(errorCode);
      }
    });
};

export default [
  mainEpic,
];
