
import React from 'react';
import { NavLink } from 'react-router-dom';
import DemoUser from './Users/DemoUser';
import { useSelector } from 'react-redux';

import IconModal from './IconModal/IconModal';
import User from './Users/User';
import './HomePage.css';
import logo from './graphics/cozy-note2-logo.png'
import login from './graphics/login-head.png'
import signup from './graphics/signup-head.png'

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
                  <i class="fa-brands fa-github fa-3x" style={{
                    color: "#b05217", marginLeft: "20px", marginRight: "20px"
                  }}></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/andrea-green-201146245/'>
                  <i class="fa-brands fa-linkedin fa-3x" style={{
                    color: "#b05217", marginLeft: "20px", marginRight: "20px"
                  }}></i>
                </a>
              </div>
        </li>
        {!user ? (
          <div>
            <li className='home-button'>
              <NavLink to='/login' exact={true} activeClassName='active'>
                {/* <img src={login} alt='login' /> */}
                <h1>hello</h1>
              </NavLink>
            </li>
            <div >
              <DemoUser />
            </div>
            <li className='home-button'>
              <NavLink to='/sign-up' exact={true} activeClassName='active' >
                <img src={signup} alt='login' />
              </NavLink>
            </li>
            <div className='about-me-links'>
              <a target="_blank" rel="noopener noreferrer" href='https://github.com/andrea-green/Cozy-Note'>
                <button className='repo-nav-button' type='submit'>
                  Project Repo
                </button>
              </a>
              {/* <div className='personal-links'>
                <a target="_blank" rel="noopener noreferrer" href='https://github.com/andrea-green'>
                  <i class="fa-brands fa-github fa-3x" style={{
                    color: "#b05217", marginLeft: "20px", marginRight: "20px"
                  }}></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/andrea-green-201146245/'>
                  <i class="fa-brands fa-linkedin fa-3x" style={{
                    color: "#b05217", marginLeft: "20px", marginRight: "20px"
                  }}></i>
                </a>
              </div> */}

            </div>

          </div>
        ) : ( <> </>
          // <div>
          //   <li className='notes-nav-button' >
          //     <NavLink to='/notes' exact={true} activeClassName='active'>
          //       <img src={notes} alt='notes' style={{ height: '40vh', marginBottom: '-25vh' }} />
          //     </NavLink>
          //   </li>
          //   <li className='notebook-nav-button' >
          //     <NavLink to='/notebooks' exact={true} activeClassName='active'>
          //       <img src={notebooks} alt='notes' style={{ height: '40vh', marginBottom: '-25vh' }} />
          //     </NavLink>
          //   </li>
          //   <li>
          //     <LogoutButton />
          //   </li>
          // </div>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
