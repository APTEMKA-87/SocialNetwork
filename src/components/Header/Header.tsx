import React from 'react';
import s from "./Header.module.css"

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://image.shutterstock.com/image-vector/earth-icon-trendy-logo-concept-260nw-1255581898.jpg" alt=""/>
            <div className={s.header}>Login</div>
        </header>
    );
};

export default Header;

