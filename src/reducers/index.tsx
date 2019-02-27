import { FrameworkAction } from '../actions';
import { StoreState } from '../types';
import { SET_REACT, SET_VUE } from '../constants';

import * as Epics from '../actions/epics';

export const framework = (state: StoreState, action: FrameworkAction): StoreState => {
    switch(action.type) {
        case SET_REACT:
            return { ...state, framework: 'React' };
        case SET_VUE:
            return { ...state, framework: 'vue' };
        default:
            return state;
    }
}