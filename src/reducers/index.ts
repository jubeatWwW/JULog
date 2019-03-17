import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { handleActions } from 'redux-actions';

import { setReact, setVue } from '../actions';
import { HelloState } from '../types';
import { SET_REACT, SET_VUE } from '../constants';

import * as Epics from '../actions/epics';
import initState from '../store/initState';

import { menuReducer } from './menu';

export const framework = handleActions(
    {
        [`${setReact}`]: state => ({ ...state, framework: 'React' }),
        [`${setVue}`]: state => ({ ...state, framework: 'Vue' }),
    },
    initState.Hello,
);

export const history = createBrowserHistory();

export const reducers = combineReducers({
    router: connectRouter(history),
    Hello: framework,
    menu: menuReducer,
});
