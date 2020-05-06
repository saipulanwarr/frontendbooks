import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/es/storage";

import reducers from './reducers';

const logger = createLogger({});

const persisConfig = {
    key: 'auth',
    storage,
    whitelist: ['auth'] 
};

const pReducer = persistReducer(persisConfig, reducers);
const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null

const store = createStore(
    pReducer,
    compose(
        applyMiddleware(
            logger,
            promiseMiddleware
        ),
        window.REDUX_DEVTOOLS_EXTENSION ? window.REDUX_DEVTOOLS_EXTENSION() : f => f
    )
)

let persistor = persistStore(store);

export {
    store,
    persistor
};