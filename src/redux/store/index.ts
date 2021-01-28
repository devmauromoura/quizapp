import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Reducers } from '../reducers';

import QuestionMiddleware from '../../screens/questions/redux/sagaMiddleware';


const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(
    Reducers,
    composeEnhancer(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(QuestionMiddleware);

export default Store;