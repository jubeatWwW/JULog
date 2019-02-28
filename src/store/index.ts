import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from "redux-observable";

import { reducers, framework } from '../reducers/index';
import { StoreState } from '../types/index';
import initState from './initState';
import { epics } from '../actions/epics';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: Function;
    }
}
const composeEnhancers = (
    window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

export default function () {
    const epicMiddleware = createEpicMiddleware<any>();
    const enhancer = composeEnhancers(applyMiddleware(epicMiddleware));

    const store = createStore<StoreState, any, {}, {}>(
        reducers,
        initState,
        enhancer,
    );

    epicMiddleware.run(epics);

    return store;
}
