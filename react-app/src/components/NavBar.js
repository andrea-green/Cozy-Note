
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import logo from './images/Cozy-logo.png';
import DemoUser from './Users/DemoUser';
import { useSelector } from 'react-redux';
import notes from './images/nav-notes.png';
import notebooks from './images/nav-notebooks.png'
import profileButton from './images/profile-button.png'
import IconModal from './IconModal/IconModal';
import User from './Users/User';
import './HomePage.css';
import LoginButton from './images/nav-bar-login-button.png';
import SignUpButton from './images/sign-up-button.png';


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
            <button className='nav-button' >
              <NavLink to='/login' exact={true} activeClassName='active'>
                Login
              </NavLink>
            </button>

            <div >
              <DemoUser />
            </div>
            <button className='nav-button' >
              <NavLink to='/sign-up' exact={true} activeClassName='active'>
                SignUp
              </NavLink>
            </button>
            <div className='about-me-links'>
              <a href='https://github.com/andrea-green/Cozy-Note'>
                <button className='repo-nav-button' type='submit'>
                  Project Repo
                </button>
              </a>
              <div className='personal-links'>
                <a href='https://github.com/andrea-green'>
                  <i class="fa-brands fa-github fa-3x" style={{
                    color: "#b05217", marginLeft: "20px", marginRight: "20px"
                  }}></i>
                </a>
                <a href='https://www.linkedin.com/in/andrea-green-201146245/'>
                  <i class="fa-brands fa-linkedin fa-3x" style={{
                    color: "#b05217", marginLeft: "20px", marginRight: "20px"
                  }}></i>
                </a>
              </div>

            </div>

          </div>
        ) : (
          <div>
            <li className='notes-nav-button' >
              <NavLink to='/notes' exact={true} activeClassName='active'>
                <img src={notes} alt='notes' style={{ height:'40vh',marginBottom:'-25vh'}} />
              </NavLink>
            </li>
            <li className='notebook-nav-button' >
              <NavLink to='/notebooks' exact={true} activeClassName='active'>
                <img src={notebooks} alt='notes' style={{ height:'40vh',marginBottom:'-25vh' }} />
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
