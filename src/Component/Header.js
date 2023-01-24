import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Navbar from './Navbar';

const Header = () => {
    return (<MainHeder>
        <NavLink to='/'>
            <img src="./images/logos.png" alt="my logo imagess" />
        </NavLink>
        <Navbar />
    </MainHeder>)
}
const MainHeder = styled.header` 
 height: 10rem;
 background-color:${({ theme }) => theme.colors.bg};
 display:flex;
 justify-content: space-between;
 align-items: center;
 position: relative;
.logo{
 height: 5rem;
}
@media (max-width:${({ theme }) => theme.media.mobile}) { 
} 
`;

export default Header
