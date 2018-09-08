const CREATE_MESSAGE = {
  START: 'CREATE_MESSAGE_START',
  SUCCESS: 'CREATE_MESSAGE_SUCCESS',
  ERROR: 'CREATE_MESSAGE_ERROR',
};

const CLEAR_ERROR_CODE = 'CLEAR_ERROR_CODE';

const createMessage = {
  start: (payload) => { return { type: CREATE_MESSAGE.START, payload }; },
  success: (payload) => { return { type: CREATE_MESSAGE.SUCCESS, payload }; },
  error: (payload) => { return { type: CREATE_MESSAGE.ERROR, payload }; },
};

const clearErrorCode = () => { return { type: CLEAR_ERROR_CODE }; };

const actions = { createMessage, clearErrorCode };
const actionTypes = { CREATE_MESSAGE, CLEAR_ERROR_CODE };

export {
  actions,
  actionTypes,
};
