import * as React from 'react';
import { SerializedStyles, jsx, css } from '@emotion/core';
import styled from '@emotion/styled';

import { NestedHex } from './NestedHex';

type MenuContent = JSX.Element | null;

interface HexMenuProps {
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
    transition: all .3s ease-in-out ${props => props.status ? '0s' : '1s'};
    height: ${props => props.status ? 215 : 0}px;
    z-index: -1;
`;

const defaultMenuUpper = [...Array(4).fill(null)];
const defaultMenuLower = [...Array(3).fill(null)];

export const HexMenu: React.FunctionComponent<HexMenuProps> = ({
    upper = defaultMenuUpper,
    lower = defaultMenuLower,
}) => {

    const upperRef = React.useRef(null);
    const lowerRef = React.useRef(null);
    const [status, setStatus] = React.useState(false);

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
                onClick={() => setStatus(!status)}
                status={true}
                delay={1}
            />
        </MenuToggle>
        <MenuWrapper status={status} />
        <MenuRow status={status}>{
            upper.map((c, i) => <NestedHex
                key={`upperMenu${i}`}
                size="110px"
                status={status}
                delay={0.1 * i + 0.3}
                >{c}</NestedHex>)
        }</MenuRow>
        <MenuRow status={status}>{
            lower.map((c, i) => <NestedHex
                key={`lowerMenu${i}`}
                size="110px"
                status={status}
                delay={0.1 * i + 0.7}
                >{c}</NestedHex>)
        }</MenuRow>
    </div>);
};
