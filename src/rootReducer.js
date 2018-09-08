import { combineReducers } from 'redux';

import mainReducers from './components/Main.reducers';

const rootReducer = combineReducers({
  ...mainReducers,
});

export default rootReducer;
