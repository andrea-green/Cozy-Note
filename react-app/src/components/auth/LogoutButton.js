import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../store/session';
import logoutButton from '../graphics/logout.png'
import "../HomePage.css"

const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = async (e) => {
    await dispatch(logout());
    history.push('/')
  };
  return (
    <div type='submit' onClick={onLogout}>
      <button className='logout-button' type='submit'>Logout</button>
    </div>
  )
};

export default LogoutButton;
