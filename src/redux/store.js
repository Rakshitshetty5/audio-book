import { applyMiddleware, createStore } from 'redux';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';
import { logger } from 'redux-logger'


const middlewares = [];

if(process.env.NODE_ENV !== 'production'){
    middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default {store, persistor};