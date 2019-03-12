import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'connected-react-router';

import { reducers, framework, history } from '../reducers/index';
import { StoreState } from '../types/index';
import initState from './initState';
import * as actions from '../actions';
import { epics } from '../actions/epics';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: Function;
    }
}
const composeEnhancers = (
    window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

export const configureStore = () => {
    const epicMiddleware = createEpicMiddleware<any>();
    const enhancer = composeEnhancers(
        applyMiddleware(
            routerMiddleware(history),
            epicMiddleware,
        ),
    );

    const store = createStore<StoreState, actions.RootAction, {}, {}>(
        reducers,
        initState,
        enhancer,
    );

    epicMiddleware.run(epics);

    return store;
};
