
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import './index.css';
import logo from '../graphics/cozy-note2-logo.png'
import LogoutButton from '../auth/LogoutButton';
import cloud from '../graphics/cloud.png';
import { useDispatch } from 'react-redux';
import { getAllNotesThunk } from '../../store/note';
import { getAllNtbksThunk } from '../../store/notebook';
import { getAllListsThunk } from '../../store/list';

export default function NavBar() {
  const dispatch = useDispatch();
  const history = useHistory();

  const noteClick = async (event) => {
    await dispatch(getAllNotesThunk())
    history.push(`/notes/`)
  }

  const nbClick = async (click) => {
    await dispatch(getAllNtbksThunk())
    history.push(`/notebooks/`)
  }

  const listClick = async (e) => {
    await dispatch(getAllListsThunk())
    history.push(`/lists/`)
  }
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
              <i className="fa-brands fa-linkedin fa-3x" />
            </a>
          </div>
        </li>
        <div>
          <li className='notes-nav-button' >
            <NavLink to='/notes' exact={true} activeClassName='active'>
              <button className='nav-button' onClick={noteClick}>Notes</button>
            </NavLink>
          </li>
          <li className='notebook-nav-button' >
            <NavLink to='/notebooks' exact={true} activeClassName='active'>
              <button className='nav-button' onClick={nbClick}>Notebooks</button>
            </NavLink>
          </li>
          <li className='lists-nav-button' >
            <NavLink to='/lists' exact={true} activeClassName='active'>
              <button className='nav-button' onClick={listClick}>Lists</button>
            </NavLink>
          </li>
          <LogoutButton />
          <li className='cloud-footer'>
            <img src={cloud} alt='cloud' />
          </li>
        </div>
      </ul>
    </nav>
  )
}
