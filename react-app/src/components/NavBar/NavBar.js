
import React from 'react';
import { NavLink } from 'react-router-dom';
import DemoUser from '../Users/DemoUser';
import { useSelector } from 'react-redux';

import IconModal from '../IconModal/IconModal';
import User from '../Users/User';
import './index.css';
import logo from '../graphics/cozy-note2-logo.png'
import login from '../graphics/login-head.png'
import signup from '../graphics/signup-head.png'
import notesHead from '../graphics/header1.png'
import nbHead from '../graphics/header2.png'
import listHead from '../graphics/header3.png'
import LogoutButton from '../auth/LogoutButton';
import cloud from '../graphics/cloud.png';

const NavBar = () => {
  const user = useSelector(state => state.session.user);

  return (
    <nav className='nav-bar'>
      <ul>
        <li className='home-button'>
          <NavLink to='/home' exact={true} activeClassName='active'>
            <img src={logo} alt='logo' />
          </NavLink>
          <div className='personal-links'>
            <a target="_blank" rel="noopener noreferrer" href='https://github.com/andrea-green'>
              <i class="fa-brands fa-github fa-3x"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/andrea-green-201146245/'>
              <i class="fa-brands fa-linkedin fa-3x"></i>
            </a>
          </div>
        </li>
        {!user ? (
          <div>
            <li>
              <NavLink to='/login' exact={true} activeClassName='active' className='login'>
                <img src={login} alt='login' />
              </NavLink>
            </li>
            <li className='home-button'>
              <NavLink to='/sign-up' exact={true} activeClassName='active' className='signup'>
                <img src={signup} alt='login' />
              </NavLink>
            </li>

          </div>
        ) : (
          <div>
            <li className='notes-nav-button' >
              <NavLink to='/notes' exact={true} activeClassName='active'>
                <img src={notesHead} alt='notes' />
              </NavLink>
            </li>
            <li className='notebook-nav-button' >
              <NavLink to='/notebooks' exact={true} activeClassName='active'>
                <img src={nbHead} alt='notebooks' />
              </NavLink>
            </li>
            <li className='lists-nav-button' >
              <NavLink to='/lists' exact={true} activeClassName='active'>
                <img src={listHead} alt='lists' />
              </NavLink>
            </li>
            <LogoutButton />
            <li className='cloud-footer'>
              <img src={cloud} alt='cloud' />
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
