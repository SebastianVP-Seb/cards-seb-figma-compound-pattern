import React, { useContext } from 'react';
import { propsHeader } from '../../interfaces/cardInterfaces';
import { HeaderWrapper } from '../../styledComponents/card/Header.styles';
import { contextCard } from './Card';
import logo from '../../logo.svg';

const CardHeader = ({ title }: propsHeader) => {

    const {title: titleCntx} = useContext(contextCard);

    return (
        <HeaderWrapper>
            <img src={logo} className="App-logo logo-card" alt="logo" />
            <h4>{titleCntx ? titleCntx : title}</h4>
        </HeaderWrapper>
    );
};

export default CardHeader;