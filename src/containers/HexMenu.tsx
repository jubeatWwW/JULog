import * as React from 'react';
import { connect } from 'react-redux';
import { SerializedStyles, jsx, css } from '@emotion/core';
import styled from '@emotion/styled';

import { StoreState } from '../types';
import { Dispatch } from 'redux';
import { NestedHex } from '../components/NestedHex';

import {
    menuToggle,
    menuSpan,
    menuContentShow,
    menuShrink,
    menuContentHide,
} from '../actions/menu';

type MenuContent = JSX.Element | null;

interface ReduxProps {
    menuToggle?: () => void;
    isMenuSpan?: boolean;
    isMenuContentShow?: boolean[];
}

interface HexMenuProps extends ReduxProps {
    upper?: MenuContent[];
    lower?: MenuContent[];
}

interface MenuRowProps {
    status?: boolean;
}

const MenuToggle: React.FunctionComponent = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: -25px;
    transition: all .3s ease-in-out;
    overflow: hidden;

    &:first-of-type {
        margin-top: 0;
    }
`;

const MenuRow: React.FunctionComponent<MenuRowProps> = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: -25px;
    transition: all .3s ease-in-out;
    overflow: hidden;

    &:first-of-type {
        margin-top: 0;
    }
`;

const MenuWrapper: React.FunctionComponent<MenuRowProps> = styled.div`
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    position: absolute;
    top: 75px;
    width: 100%;
    transition: all .3s ease-in-out;
    height: ${props => props.status ? 215 : 0}px;
    z-index: -1;
`;

const defaultMenuUpper = [...Array(4).fill(null)];
const defaultMenuLower = [...Array(3).fill(null)];

const hexShowCSS = css`
    transition: all .3s ease-in-out;
    opacity: 1;
`;

const hexHideCSS = css`
    transition: all .3s ease-in-out;
    opacity: 0;
`;

export const HexMenuWrapper: React.FunctionComponent<HexMenuProps> = ({
    upper = defaultMenuUpper,
    lower = defaultMenuLower,
    menuToggle,
    isMenuSpan,
    isMenuContentShow,
}) => {

    const isUpperShow = isMenuContentShow.slice(0, 4);
    const isLowerShow = isMenuContentShow.slice(4);
    if (upper.length < 4) {
        [...Array(4 - upper.length)].forEach(() => upper.push(null));
    }
    if (lower.length < 3) {
        [...Array(3 - upper.length)].forEach(() => lower.push(null));
    }

    return (
    <div
        css={css`
            display: flex;
            justify-content: center;
            flex-direction: column;
            position: relative;
        `}
    >
        <MenuToggle>
            <NestedHex
                size="130px"
                innerColor="#41B3A3"
                onClick={menuToggle}
            />
        </MenuToggle>
        <MenuWrapper status={isMenuSpan} />
        <MenuRow>{
            upper.map((c, i) => <NestedHex
                key={`upperMenu${i}`}
                size="110px"
                CSS={[isUpperShow[i] ? hexShowCSS : hexHideCSS]}
            >
                {c}
            </NestedHex>)
        }</MenuRow>
        <MenuRow>{
            lower.map((c, i) => <NestedHex
                key={`lowerMenu${i}`}
                size="110px"
                CSS={[isLowerShow[i] ? hexShowCSS : hexHideCSS]}
            >
                {c}
            </NestedHex>)
        }</MenuRow>
    </div>);
};

function mapStateToProps({ menu: { isMenuSpan, isMenuContentShow } }: StoreState) {
    return {
        isMenuSpan,
        isMenuContentShow,
    };
}

function mapDispatchToProps(dispatch: Dispatch<any>, ownProps: StoreState) {
    return {
        menuToggle: () => dispatch(menuToggle()),
    };
}

export const HexMenu = connect(
    mapStateToProps,
    mapDispatchToProps,
)(HexMenuWrapper);
