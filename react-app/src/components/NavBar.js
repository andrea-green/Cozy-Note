
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import logo from './images/Cozy-logo.png';
import DemoUser from './Users/DemoUser';
import { useSelector } from 'react-redux';
import notes from './images/nav-notes.png'
import notebooks from './images/nav-notebooks.png'
import profileButton from './images/profile-button.png'
import IconModal from './IconModal/IconModal';
import User from './Users/User';
import './HomePage.css';


const NavBar = () => {
  const user = useSelector(state => state.session.user);

  return (
    <nav className='nav-bar'>
      <ul>
        <li className='home-button'>
          <NavLink to='/home' exact={true} activeClassName='active'>
            <img src={logo} alt='logo' />
          </NavLink>
        </li>
        {!user ? (
          <div>
            <li className='nav-button' >
              <NavLink to='/login' exact={true} activeClassName='active'>
                Login
              </NavLink>
            </li>
            {/* demo user move to the landing page */}
            <div className='nav-button' >
              <DemoUser />
            </div>
            <li className='nav-button' >
              <NavLink to='/sign-up' exact={true} activeClassName='active'>
                Sign Up
              </NavLink>
            </li>
          </div>
        ) : (
          <div>
            <li className='nav-button' >
              <NavLink to='/notes' exact={true} activeClassName='active'>
                <img src={notes} alt='notes' style={{ height: "260px", width: "190px" }} />
              </NavLink>
            </li>
            <li className='nav-button' >
              <NavLink to='/notebooks' exact={true} activeClassName='active'>
                <img src={notebooks} alt='notes' style={{ height: "280px", width: "200px" }} />
              </NavLink>
            </li>
            <li>
              <LogoutButton />
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
