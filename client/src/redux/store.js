import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import persistStore from 'redux-persist/es/persistStore';
import persistedReducer from './root-reducer';
const middlewares = [logger];
export const store = createStore(persistedReducer, applyMiddleware(...middlewares));
export const persistor=persistStore(store);
export default {persistor,store};