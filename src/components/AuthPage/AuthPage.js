import React from 'react';
import { NavLink } from 'react-router-dom';
import logoPath from '../../images/logo.svg';
import './AuthPage.css';

const AuthPage = ({texts, children}) => {
  const {
    greeting,
    buttonText,
    suggestionText,
    linkText,
    linkTo
  } = texts;
  return (
    <div className='auth-page'>
      <NavLink to="/" className='auth-page__logo'>
        <img alt='логотип' src={logoPath} />
      </NavLink>

      <h2 className='auth-page__title'>{greeting}</h2>
      <form 
      action="" 
      // onSubmit={handleSubmit} 
      name="search-form" 
      noValidate 
      className="auth-page__form"
    >
        {/* <AuthInput name='name' title='Имя' type='text' />
        <AuthInput name='email' title='E-mail' type='email' />
        <AuthInput name='password' title='Пароль' type='password' /> */}
        {children}
        <button type="submit" className="auth-page__button">{buttonText}</button>
    </form>
    <div className='auth-page__suggestion'>
      <p className='auth-page__question'>{suggestionText}</p>
      <NavLink to={linkTo} className='auth-page__link' >{linkText}</NavLink>
    </div>
    </div>
  )
}

export default AuthPage