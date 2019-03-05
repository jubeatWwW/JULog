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
    size?: number;
}

const HexagonOuter = styled.div`
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

const defaultProps: HexProps = {
    size: 300,
};

export const Hex: React.SFC<HexProps> = (props = defaultProps) => {
    return (
        <HexagonOuter className="hexagon" size={props.size || 300} css={props.style}>
            <HexagonInner css={props.innerStyle}>
                {props.children}
            </HexagonInner>
        </HexagonOuter>
    );
};
