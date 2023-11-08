import React from 'react';
import AuthInput from '../AuthInput/AuthInput';
import AuthPage from '../AuthPage/AuthPage';

const Login = () => {
  const pageTexts = {
    greeting: 'Рады видеть!',
    buttonText: 'Войти',
    suggestionText: 'Ещё не зарегистрированы?',
    linkText: 'Регистрация',
    linkTo: '/signup'
  }
  return (
    <AuthPage texts={pageTexts}>
      <AuthInput name='email' title='E-mail' type='email' />
      <AuthInput name='password' title='Пароль' type='password' />
    </AuthPage>
  )
}

export default Login