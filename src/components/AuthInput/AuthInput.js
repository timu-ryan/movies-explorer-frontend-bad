import React from 'react';
import './AuthInput.css'

const AuthInput = ({ name, title, type }) => {
  return (
      <label className="auth-input">
        <span className='auth-input__input-description'>{title}</span>
        <input
          id={`${name}-input`}
          type={type}
          name={`auth-${name}-input`}
          required
          className="auth-input__input"
        />
        <span className="auth-input-input-error"></span>
      </label>
  )
}

export default AuthInput