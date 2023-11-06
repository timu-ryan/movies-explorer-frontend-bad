import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavTab.css'

const NavTab = () => {
  return (
    <div className='navtab'>
      <NavLink to='#about-project' className='navtab__link'>О проекте</NavLink>
      <NavLink to='#techs' className='navtab__link'>Технологии</NavLink>
      <NavLink to='#about-me' className='navtab__link'>Студент</NavLink>
    </div>
  )
}

export default NavTab