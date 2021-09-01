import React from 'react';
import s from './Header.module.css'
import logo from '../../img/logo.png'

const Header = () => {
    return (
        <header className={s.header}>
            <p><img src={logo} alt=""/>Social Network</p>
            <div className={s.header}>Login</div>
        </header>
    );
};

export default Header;

