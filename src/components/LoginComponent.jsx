import React, { useState } from 'react'
import { LoginAPI } from '../api/AuthAPI'
import '../Sass/LoginComponent.scss'
import LinkedinLogo from '../assets/linkedinLogo.png';

export const LoginComponent = () => {

  const [credentials, setCredentials] = useState({});

  const login = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password);
      console.log(res.user)
    }
    catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='login-wrapper'>
      <img src={LinkedinLogo} className='linkedinLogo' />

      <h1 className='heading'>Sign in</h1>
      <p className='sub-heading'>Stay updated on your professional work</p>

      <div className='auth-inputs'>
        <input onChange={(event) => {
          setCredentials({ ...credentials, email: event.target.value })
        }}
          className='common-input'
          placeholder='Email or phone'
        />
        <input onChange={(event) => {
          setCredentials({ ...credentials, password: event.target.value })
        }}
          type='password'
          className='common-input'
          placeholder='Password'
        />
      </div>
      <button onClick={login} className='login-btn'>Login in to Linkedin</button>
    </div>
  )
}
