import React from 'react';
import s from './Header.module.css'
import logo from '../../img/logo.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className={s.header}>
            <p><img src={logo} alt=""/>Social Network</p>
            <div className={s.header}>
                <NavLink to={'login'}>Login</NavLink>
            </div>
        </header>
    );
};

export default Header;

