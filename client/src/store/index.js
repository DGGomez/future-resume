import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from '../reducers';

const middlewares = [thunk];

middlewares.push(createLogger());

const store = createStore(
    reducers,
    applyMiddleware(...middlewares)
);

export default store;