import { createStore } from 'redux';
import { framework } from '../reducers/index';
import { StoreState } from '../types/index';
import initState from './initState';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION__?: any;
    }
}

export default function () {
    const store = createStore<StoreState, any, {}, {}>(
        framework,
        initState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}
