
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import logo from './images/Cozy-logo.png';


const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/home' exact={true} activeClassName='active'>
            <img src={logo} alt='logo'></img>
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to='/notes' exact={true} activeClassName='active'>
            Notes
          </NavLink>
        </li>
        <li>
          <NavLink to='/notebooks' exact={true} activeClassName='active'>
            Notebooks
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
