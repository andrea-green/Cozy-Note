import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import logoutButton from '../graphics/logout.png'
import "../HomePage.css"

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };
  return (
    <div>
      <div className='logout-button' onClick={onLogout} >
        <img src={logoutButton} alt='logout'  />
      </div>
    </div>
  )
};

export default LogoutButton;
