import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';
import { coursesListWatcher } from './saga';

import { coursesReducer } from './reducer'

let middlewares = []

const sagaMiddleware = createSagaMiddleware();

middlewares.push(thunk)
middlewares.push(sagaMiddleware)

let middleware = applyMiddleware(...middlewares)

function configureStore(initialState) {
  return {
    ...createStore(coursesReducer, initialState, middleware),
    runSaga: sagaMiddleware.run
  };
}

const store = configureStore();
store.runSaga(coursesListWatcher);

export { store }
