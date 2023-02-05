import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import logoutButton from '../images/logout-button.png'

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };
  return (
    <div>
      <button className='logout-button' onClick={onLogout}>LOGOUT</button>
    </div>
  )
  // return <button className='logout-button' onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
