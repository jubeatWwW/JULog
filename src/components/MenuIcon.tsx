import * as React from 'react';
import { SerializedStyles, jsx, css } from '@emotion/core';
import styled from '@emotion/styled';

interface MenuIconProps {
    status: boolean;
}

const MenuIconWrapper  = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Burger: React.FunctionComponent<MenuIconProps> = styled.div`
    width: 50%;
    border: 2px solid white;
    border-radius: 5px;
    transition: all .3s ease-in-out;
`;

const BurgerUpper: React.FunctionComponent<MenuIconProps> = styled(Burger)`
    transform: ${props => props.status ? 'translateY(4px) rotate(-45deg)' : 'translateY(-15px)' };
`;

const BurgerMid: React.FunctionComponent<MenuIconProps> = styled(Burger)`
    width: ${props => props.status ? '0' : '50%' };
`;

const BurgerLower: React.FunctionComponent<MenuIconProps> = styled(Burger)`
    transform: ${props => props.status ? 'translateY(-4px) rotate(45deg)' : 'translateY(15px)' };
`;

export const MenuIcon: React.FunctionComponent<MenuIconProps> = ({ status = false }) => (
    <MenuIconWrapper>
        <BurgerUpper status={status} />
        <BurgerMid status={status} />
        <BurgerLower status={status} />
    </MenuIconWrapper>
);
