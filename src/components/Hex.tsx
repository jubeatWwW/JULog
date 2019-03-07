/** @jsx jsx */
import * as React from 'react';
import styled from '@emotion/styled';
import { SerializedStyles, jsx, css } from '@emotion/core';

export interface HexProps {
    children?: JSX.Element;
    CSS?: SerializedStyles;
    style?: object;
    innerStyle?: any;
    size?: string;
    ref?: React.MutableRefObject<HTMLDivElement>;
}

const style = css`
`;

export interface HexagonWrapperProps {
    size?: string;
    className?: string;
}

export interface HexOuterProps {
    style?: object;
    size?: number;
}

const HexagonWrapper: React.FunctionComponent<HexagonWrapperProps> = styled.div`
    height: ${(props: HexagonWrapperProps) => props.size};
    width: ${(props: HexagonWrapperProps) => props.size};
    display: flex;
    justify-content: center;
`;

const HexagonOuter: React.FunctionComponent<HexOuterProps> = styled.div`
    position: relative;
    transform: rotate(-60deg) skewY(30deg);
    overflow: hidden;
    height: 100%;
    width: 86.6%;
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
    size = '300px',
    style = {},
    CSS = css``,
    innerStyle,
    children }) => (
    <HexagonWrapper className="hexagon" size={size}>
        <HexagonOuter css={CSS} style={style}>
            <HexagonInner css={innerStyle}>
            {children}
            </HexagonInner>
        </HexagonOuter>
    </HexagonWrapper>
);
