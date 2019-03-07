/** @jsx jsx */
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from '@emotion/styled';

import { StoreState, HelloState } from '../../types';
import * as actions from '../../actions/';

import { jsx, css } from '@emotion/core';

import { HexMenu } from '../../components/HexMenu';

interface HelloProps extends HelloState {
    setReact: () => void;
    setVue: () => void;
}

const MenuWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

const Main = (props: HelloProps) => (
    <React.Fragment>
        <HexMenu />
        <h1>Hello from {props.compiler} and {props.framework}!</h1>
        <button onClick={props.setReact}>react</button>
        <button onClick={props.setVue}>vue</button>
    </React.Fragment>
);

function mapStateToProps({ Hello: { compiler, framework } }: StoreState) {
    return {
        compiler,
        framework,
    };
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
    return {
        setReact: () => dispatch(actions.setReact()),
        setVue: () => dispatch(actions.setVue()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
