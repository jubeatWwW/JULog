import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { jsx } from '@emotion/core';

import { StoreState } from './types';
import { history } from './reducers';
import { configureStore } from './store';

import Main from './routes/Main';

import './styles/index.less';

const store = configureStore();

const Hello2 = () => <h1>Hello World</h1>;

const App = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <>
                <Route exact={true} path="/" component={Main} />
                <Route path="/hello" component={Hello2} />
            </>
        </ConnectedRouter>
    </Provider>
);

ReactDOM.render(
    <App />,
    document.getElementById('app'),
);
