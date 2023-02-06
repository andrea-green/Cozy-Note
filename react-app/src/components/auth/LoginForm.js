import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import loginGraphic from '../images/log-in-graphic.png'
import loginHeader from '../images/login-header.png'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/home' />;
  }

  return (
    <form className='login-form-main' onSubmit={onLogin}>
      <div className='login-header'>
        <img src={loginHeader} />
      </div>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div style={{
        padding: '5px',
        margin: '5px',
        fontSize:'25px'
      }}>
        <label htmlFor='email'>Email</label>
        <input
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div style={{
        padding: '5px',
        marginBottom: '5px',
        fontSize:'25px'
      }}>
        <label htmlFor='password'>Password</label>
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
        <button style={{cursor:'pointer'}} type='submit'>Login</button>
      </div>
      <div className='login-graphic'>
        <img src={loginGraphic} alt='login-graphic' />
      </div>
    </form>
  );
};

export default LoginForm;
