import * as actions from '../actions';
import * as constants from '../constants';
import { Epic, ofType, combineEpics } from 'redux-observable';
import { delay, map, mapTo, filter, exhaustMap, mergeMap, take, startWith, concatMap, concat } from 'rxjs/operators';

import {
    MenuAction,
    menuToggle,
    menuSpan,
    menuContentShow,
    menuShrink,
    menuContentHide,
} from '../actions/menu';
import { pipe, merge, interval, from, of } from 'rxjs';

/*export const frameworkEpic: Epic<actions.RootAction> = action$ => action$.pipe(
    ofType(`${actions.setVue}`),
    delay(1000),
    mapTo(actions.setReact()),
);*/

export const frameworkEpic: Epic<actions.RootAction> = action$ => action$.pipe(
    ofType(`${actions.setVue}`),
    mergeMap(f => interval(1000).pipe(
        take(3),
        mapTo(actions.setReact()),
    )),
);

const menuEpic: Epic<MenuAction> = (action$, state$) => action$.pipe(
    ofType(`${menuToggle}`),
    exhaustMap(() => state$.value.menu.isMenuSpan ?
        interval(100).pipe(
            take(7),
            map(val => menuContentHide(val)),
            concat(of(menuShrink())),
        ) : merge(
            of(menuSpan()),
            interval(100).pipe(
                delay(300),
                take(7),
                map(val => menuContentShow(val)),
            ),
        ),
    ),
);

export const epics = combineEpics(
    frameworkEpic,
    menuEpic,
);
