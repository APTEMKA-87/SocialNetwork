import React from 'react';
import s from './Header.module.css'
import logo from '../../img/logo.png'
import { NavLink } from 'react-router-dom';

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <p><img src={logo} alt=""/>Social Network</p>
            <div className={s.header}>
                { props.isAuth ? props.login :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;

