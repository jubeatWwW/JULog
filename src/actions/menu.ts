import { createActions } from 'redux-actions';
import { ActionType } from 'typesafe-actions';
import {
    MENU_TOGGLE,
    MENU_SPAN,
    MENU_CONTENT_SHOW,
    MENU_SHRINK,
    MENU_CONTENT_HIDE,
} from '../constants/menu';

export const {
    menuToggle,
    menuSpan,
    menuShrink,
} = createActions(
    MENU_TOGGLE,
    MENU_SPAN,
    MENU_SHRINK,
);

export const {
    menuContentShow,
    menuContentHide,
} = createActions({
    [`${MENU_CONTENT_SHOW}`]: (key: number) => ({ key, status: true }),
    [`${MENU_CONTENT_HIDE}`]: (key: number) => ({ key, status: false }),
});

type menuToggle = ActionType<typeof menuToggle>;
type menuSpan = ActionType<typeof menuSpan>;
type menuContentShow = ActionType<typeof menuContentShow>;
type menuShrink = ActionType<typeof menuShrink>;
type menuContentHide = ActionType<typeof menuContentHide>;

export type MenuAction = menuToggle | menuSpan | menuContentShow | menuShrink | menuContentHide;
