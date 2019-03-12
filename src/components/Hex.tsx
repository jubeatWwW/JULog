import * as React from 'react';
import styled from '@emotion/styled';
import { SerializedStyles, jsx, css } from '@emotion/core';

export interface HexProps {
    children?: JSX.Element;
    CSS?: SerializedStyles[];
    style?: object;
    innerCSS?: SerializedStyles;
    innerStyle?: object;
    size?: string;
    onMouseEnter?: React.MouseEventHandler;
    onMouseLeave?: React.MouseEventHandler;
    onClick?: React.MouseEventHandler;
}

export interface HexOuterProps {
    style?: object;
    className?: string;
    size?: string;
    ref: React.MutableRefObject<HTMLDivElement>;
    height: number;
}

const HexagonOuter: React.FunctionComponent<HexOuterProps> = styled.div`
    position: relative;
    transform: rotate(-60deg) skewY(30deg);
    overflow: hidden;
    width: ${props => props.size};
    height: ${props => props.height}px;
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
    transition: all .2s ease-in-out;
`;

export const Hex: React.FunctionComponent<HexProps> = ({
    size = '300px',
    style = {},
    CSS = [css``],
    innerCSS = css``,
    innerStyle = {},
    onMouseEnter,
    onMouseLeave,
    onClick,
    children }) => {

    const hexRef: React.MutableRefObject<HTMLDivElement> = React.useRef(null);
    const [height, setHeight] = React.useState<number>(0);

    React.useEffect(() => {
        setHeight(hexRef.current.offsetWidth / 0.866);
    });

    return (
        <HexagonOuter
            className="hexagon"
            css={[...CSS]}
            style={style}
            ref={hexRef}
            size={size}
            height={height}
        >
            <HexagonInner
                css={innerCSS}
                style={innerStyle}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={onClick}
            >
                {children}
            </HexagonInner>
        </HexagonOuter>
    );
};
