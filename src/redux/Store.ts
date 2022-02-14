import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import RootReducer from './RootReducer';

const middlewares = [logger];

export const store = createStore(RootReducer, applyMiddleware(...middlewares));
