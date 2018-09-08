import { combineEpics } from 'redux-observable';

import mainEpics from './components/Main.epics';

const rootEpics = combineEpics(
  ...mainEpics,
);

export default rootEpics;
