import { RouterState } from 'connected-react-router';

export interface HelloState {
    compiler: string;
    framework: string;
}

export interface MenuState {
    isMenuSpan: boolean;
    isMenuContentShow: boolean[];
}

export interface StoreState {
    router: RouterState;
    Hello: HelloState;
    menu: MenuState;
}
