import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <p><img src={'/img/logo.png'} alt=""/>Social Network</p>
            <div className={s.header}>Login</div>
        </header>
    );
};

export default Header;

