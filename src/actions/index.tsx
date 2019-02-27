import * as constants from '../constants';

export interface FrameworkReact {
    type: constants.SET_REACT;
}

export interface FrameworkVue {
    type: constants.SET_VUE;
}

export type FrameworkAction = FrameworkReact | FrameworkVue;

export const setReact = (): FrameworkReact => ({
    type: constants.SET_REACT,
});

export const setVue = (): FrameworkVue => ({
    type: constants.SET_VUE,
});