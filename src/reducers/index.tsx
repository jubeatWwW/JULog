import { FrameworkAction } from '../actions';
import { StoreState } from '../types';
import { SET_REACT, SET_VUE } from '../constants';

export const framework = (state: StoreState, action: FrameworkAction): StoreState => {
    console.log(action);
    switch(action.type) {
        case SET_REACT:
            console.log(state);
            return { framework: 'React', ...state };
        case SET_VUE:
            return { framework: 'vue', ...state };
        default:
            return state;
    }
}