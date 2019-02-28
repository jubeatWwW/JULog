import * as actions from '../actions';
import * as constants from '../constants';
import { Epic, ofType, combineEpics } from 'redux-observable';
import { delay, mapTo } from 'rxjs/operators';

export const frameworkEpic: Epic<actions.FrameworkAction> = action$ => action$.pipe(
    ofType(constants.SET_VUE),
    delay(1000),
    mapTo(actions.setReact())
);

export const epics = combineEpics(
    frameworkEpic,
);