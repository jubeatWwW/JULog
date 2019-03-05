/** @jsx jsx */
import * as React from 'react';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';

export interface HexProps {
    children?: JSX.Element;
    style?: any;
    innerStyle?: any;
    size?: number;
}

export interface HexOuterProps {
    className?: string;
    size?: number;
}

const HexagonOuter: React.FunctionComponent<HexOuterProps> = styled.div`
    position: relative;
    transform: rotate(-60deg) skewY(30deg);
    overflow: hidden;
    height: ${(props: HexOuterProps) => props.size}px;
    width: ${(props: HexOuterProps) => props.size * 0.866}px;
`;

const HexagonInner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: white;
    height: 100%;
    width: 100%;
    transform: skewY(-30deg) rotate(60deg);
    overflow: hidden;
`;

export const Hex: React.FunctionComponent<HexProps> = ({
    size = 300,
    style,
    innerStyle,
    children }) => (
    <HexagonOuter className="hexagon" size={size} css={style}>
        <HexagonInner css={innerStyle}>
            {children}
        </HexagonInner>
    </HexagonOuter>
);
