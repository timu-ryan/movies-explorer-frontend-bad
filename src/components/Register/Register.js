import React from 'react';
import { NavLink } from 'react-router-dom';
import logoPath from '../../images/logo.svg';
import './Register.css';
import AuthInput from '../AuthInput/AuthInput';
import AuthPage from '../AuthPage/AuthPage';

const Register = ({ handleSubmit }) => {
  const pageTexts = {
    greeting: 'Добро пожаловать!',
    buttonText: 'Зарегистрироваться',
    suggestionText: 'Уже зарегистрированы?',
    linkText: 'Войти',
    linkTo: '/signin'
  }
  return (
    <AuthPage texts={pageTexts}>
      <AuthInput name='name' title='Имя' type='text' />
      <AuthInput name='email' title='E-mail' type='email' />
      <AuthInput name='password' title='Пароль' type='password' />
    </AuthPage>
  )
}

export default Register