
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import logo from './images/Cozy-logo.png';
import DemoUser from './Users/DemoUser';
import { useSelector } from 'react-redux';
import notes from './images/nav-notes.png'
import notebooks from './images/nav-notebooks.png'
// import logoutButton from './images/logout-button.png'
const NavBar = () => {
  const user = useSelector(state => state.session.user);

  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/home' exact={true} activeClassName='active'>
            <img src={logo} alt='logo' style={{ height: '350px', width: '350px' }} />
          </NavLink>
        </li>
        {!user &&
          <div>
            <li>
              <NavLink to='/login' exact={true} activeClassName='active'>
                Login
              </NavLink>
            </li>
            {/* demo user move to the landing page */}
            <div>
              <DemoUser />
            </div>
            <li>
              <NavLink to='/sign-up' exact={true} activeClassName='active'>
                Sign Up
              </NavLink>
            </li>
          </div>
        }
        <li>
          <NavLink to='/notes' exact={true} activeClassName='active'>
            <img src={notes} alt='notes' style={{ height: "260px", width: "190px" }} />
          </NavLink>
        </li>
        <li>
          <NavLink to='/notebooks' exact={true} activeClassName='active'>
            <img src={notebooks} alt='notes' style={{ height: "280px", width: "200px" }} />
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
