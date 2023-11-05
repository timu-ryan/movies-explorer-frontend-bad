import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css'

import logoPath from '../../images/logo.svg';

const Header = () => {
  return (
    <div className='header'>
      <NavLink to="/" className='header__logo'/>
      {/* <NavLink to="/">
        <img alt='логотип' src={logoPath} className='header__logo' />
      </NavLink> */}
      <div className='header__navigation'>
        <NavLink to="/movies" className="header__navigation-link">Фильмы</NavLink>
        <NavLink to="/saved-movies" className="header__navigation-link">Сохранённые фильмы</NavLink>
      </div>
      <NavLink to="/profile" className="header__account-button">Аккаунт</NavLink>
    </div>
  )
}

export default Header