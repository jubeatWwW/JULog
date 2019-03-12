import * as React from 'react';
import { SerializedStyles, jsx, css } from '@emotion/core';
import styled from '@emotion/styled';

import { Hex } from './Hex';

export interface NestedHexProps {
    style?: object;
    CSS?: SerializedStyles;
    size?: string;
    backgroundColor?: string;
    borderColor?: string;
    innerColor?: string;
    hoveredColor?: string;
    borderSize?: number;
    innerSize?: number;
    children?: JSX.Element;
    onMouseEnter?: React.MouseEventHandler;
    onMouseLeave?: React.MouseEventHandler;
    onClick?: React.MouseEventHandler;
    status: boolean;
    delay: number;
    [props: string]: any;
}

const HexWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
`;

const nestedCSS = css`
    margin: 0 4px;
`;

export const NestedHex: React.FunctionComponent<NestedHexProps> = ({
    CSS = css``,
    style = {},
    size = '100px',
    backgroundColor = '#1e2530',
    innerColor = 'white',
    borderColor = '#1e2530',
    hoveredColor = '#ea7432',
    borderSize = 0.97,
    innerSize = 0.8,
    children = null,
    onMouseEnter,
    onMouseLeave,
    onClick,
    status,
    delay,
    ...props
}) => {

    const hexRef = React.useRef(null);
    const [hovered, setHover] = React.useState(false);

    const onMouseEnterInner: React.MouseEventHandler = (e: React.MouseEvent) => {
        setHover(true);
    };
    const onMouseLeaveInner: React.MouseEventHandler = (e: React.MouseEvent) => {
        setHover(false);
    };

    const showCSS = css`
        opacity: ${status ? 1 : 0};
        transition: all .3s ease-in-out ${delay}s;
        pointer-events: ${status ? 'all' : 'none'};
    `;

    return (
    <Hex
        innerStyle={{ backgroundColor: borderColor }}
        size={size}
        CSS={[nestedCSS, showCSS, CSS]}
        style={style}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        <HexWrapper>
            <Hex
                innerStyle={{ backgroundColor: innerColor }}
                size={`${borderSize * 100}%`}
                onClick={onClick}
            >
                <HexWrapper>
                    <Hex
                        innerStyle={{ backgroundColor: hovered ? hoveredColor : backgroundColor }}
                        size={`${innerSize * 100}%`}
                        onMouseEnter={onMouseEnterInner}
                        onMouseLeave={onMouseLeaveInner}
                    >
                        {children}
                    </Hex>
                </HexWrapper>
            </Hex>
        </HexWrapper>
    </Hex>
    );
};
