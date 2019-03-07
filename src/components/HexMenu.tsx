/** @jsx jsx */
import * as React from 'react';
import { SerializedStyles, jsx, css } from '@emotion/core';
import styled from '@emotion/styled';

import { NestedHex } from './NestedHex';

export const HexMenu: React.FunctionComponent = () => (
    <div
        css={css`
            display: flex;
            justify-content: center;`}
    >
        <NestedHex size={150} />
        <NestedHex size={150} CSS={css`margin-left: -5px;`} />
    </div>
);
