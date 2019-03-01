import { createActions } from 'redux-actions';
import * as constants from '../constants';

export const { setReact, setVue } = createActions(constants.SET_REACT, constants.SET_VUE);

import { ActionType } from 'typesafe-actions';

type setReact = ActionType<typeof setReact>;
type setVue = ActionType<typeof setVue>;
export type RootAction = setReact | setVue;
