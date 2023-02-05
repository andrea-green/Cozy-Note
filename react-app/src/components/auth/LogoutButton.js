import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import logoutButton from '../images/logout-button.png'
import "../HomePage.css"

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };
  return (
    <div>
      <div className='logout-button' onClick={onLogout}>
        <img src={logoutButton} alt='logout' style={{ height: "280px", width: "200px" }} />
      </div>
    </div>
  )
  // return <button className='logout-button' onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
