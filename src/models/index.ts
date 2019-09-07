import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';

import { createClient } from '../api';
import { reducer as rootReducer } from './reducer';
import { epic } from './epic/index';

const clients = createClient();
const state = {};

const epicMiddleware = createEpicMiddleware({
  dependencies: {
    api: clients
  }
});

const reducer = combineReducers({
  ...rootReducer
});

export default function configStore() {
  const middleware = [epicMiddleware, createLogger()];
  const store = createStore(reducer, state, applyMiddleware(...middleware));
  epicMiddleware.run(epic);
  return store;
}
