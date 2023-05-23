import { applyMiddleware, legacy_createStore as createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";

import reducers from './reducers/index.js';
import sagas from './sagas/index.js';

const sagaMiddleware = createSagaMiddleware();

export default createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);