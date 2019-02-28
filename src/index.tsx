import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider, connect } from 'react-redux';
import { Dispatch } from "redux";

import * as actions from './actions/';
import { StoreState, HelloState } from './types';
import configureStore from './store';

const store = configureStore();

interface HelloProps extends HelloState {
    setReact: () => void;
    setVue: () => void;
};

const Hello = (props: HelloProps) => (
    <>
        <h1>Hello from {props.compiler} and {props.framework}!</h1>
        <button onClick={props.setReact}>react</button>
        <button onClick={props.setVue}>vue</button>
    </>
);

function mapStateToProps({ Hello: { compiler, framework } }: StoreState) {
    return {
        compiler,
        framework,
    };
}

function mapDispatchToProps(dispatch: Dispatch<actions.FrameworkAction>) {
    return {
        setReact: () => dispatch(actions.setReact()),
        setVue: () => dispatch(actions.setVue()),
    }
}

const HelloRedux = connect(mapStateToProps, mapDispatchToProps)(Hello);

const App = () => (<Provider store={store}>
    <HelloRedux />
</Provider>);


ReactDOM.render(
    <App />,
    document.getElementById("app")
);