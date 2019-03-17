import { handleActions, combineActions } from 'redux-actions';
import {
    menuSpan,
    menuContentShow,
    menuShrink,
    menuContentHide,
} from '../actions/menu';
import initState from '../store/initState';

export const menuReducer = handleActions(
    {
        [`${menuSpan}`]: state => ({ ...state, isMenuSpan: true }),
        [`${menuShrink}`]: state => ({ ...state, isMenuSpan: false }),
        [`${combineActions(`${menuContentShow}`, `${menuContentHide}`)}`]: (
            state,
            { payload: { key, status } }: any,
        ) => {
            const isContentShow = [...state.isMenuContentShow];
            isContentShow[key] = status;
            return { ...state, isMenuContentShow: isContentShow };
        },
    },
    initState.menu,
);
