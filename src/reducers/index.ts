import { combineReducers } from 'redux';

import { FrameworkAction } from '../actions';
import { HelloState } from '../types';
import { SET_REACT, SET_VUE } from '../constants';

import * as Epics from '../actions/epics';
import initState from '../store/initState';

export const framework = (state: HelloState = initState.Hello, action: FrameworkAction): HelloState => {
    switch(action.type) {
        case SET_REACT:
            return { ...state, framework: 'React' };
        case SET_VUE:
            return { ...state, framework: 'vue' };
        default:
            return state;
    }
}

export const reducers = combineReducers({
    Hello: framework,
});