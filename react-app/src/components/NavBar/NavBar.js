
import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';
import logo from '../graphics/cozy-note2-logo.png'
import notesHead from '../graphics/header1.png'
import nbHead from '../graphics/header2.png'
import listHead from '../graphics/header3.png'
import LogoutButton from '../auth/LogoutButton';
import cloud from '../graphics/cloud.png';

export default function NavBar() {
  return (
    <nav className='nav-bar'>
       <ul>
        <li className='home-button'>
          <NavLink to='/home' exact={true} activeClassName='active'>
            <img src={logo} alt='logo' />
          </NavLink>
          <div className='personal-links'>
            <a target="_blank" rel="noopener noreferrer" href='https://github.com/andrea-green'>
              <i className="fa-brands fa-github fa-3x" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/andrea-green-201146245/'>
              <i className="fa-brands fa-linkedin fa-3x"/>
            </a>
          </div>
        </li>
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
            {/* <LogoutButton /> */}
            <button className='logout-button' type='submit'>Logout</button>
            <li className='cloud-footer'>
              <img src={cloud} alt='cloud' />
            </li>
          </div>
      </ul>
    </nav>
  )
}
