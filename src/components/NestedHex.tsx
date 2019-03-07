/** @jsx jsx */
import * as React from 'react';
import { SerializedStyles, jsx, css } from '@emotion/core';
import styled from '@emotion/styled';

import { Hex } from './Hex';

export interface NestedHexProps {
    style?: object;
    CSS?: SerializedStyles;
    size?: number;
    backgroundColor?: string;
    borderColor?: string;
    innerColor?: string;
    borderSize?: number;
    innerSize?: number;
    children?: JSX.Element;
}

const HexWrapper = styled.div`
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const NestedHex: React.FunctionComponent<NestedHexProps> = ({
    CSS = css``,
    style = {},
    size = 100,
    backgroundColor = '#1e2530',
    innerColor = 'white',
    borderColor = '#1e2530',
    borderSize = 0.95,
    innerSize = 0.8,
    children = null,
}) => {

    // const [s, us] = React.useState(null);

    return (
    <Hex innerStyle={{ backgroundColor }} size={`${size}px`} CSS={CSS} style={style}>
        <HexWrapper>
            <Hex innerStyle={{ backgroundColor: innerColor }} size={`${size * 0.95}px`} css={CSS}>
                <HexWrapper>
                    <Hex innerStyle={{ backgroundColor: borderColor }} size={`${size * 0.8}px`}>
                        {children}
                    </Hex>
                </HexWrapper>
            </Hex>
        </HexWrapper>
    </Hex>
    );
};
