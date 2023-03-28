import React from 'react';
import { NavLink } from 'react-router-dom';
import DemoUser from '../Users/DemoUser';
import { useSelector } from 'react-redux';
import logIn from '../graphics/login.png';
import logo from '../graphics/cozy-note2-logo.png'
import signup from '../graphics/signup-head.png'
import repo from '../graphics/repo.png';




export default function Header() {
    return (
        // <h1>Hello </h1>
        <nav>
            <ul className='header-nav-bar'>
                <li className='home-button'>
                    <NavLink to='/' exact={true} activeClassName='active'>
                        <img src={logo} alt='logo' />
                    </NavLink>
                </li>
                <li className='signUp'>
                    <NavLink to='/sign-up' exact={true} activeClassName='active'>
                        <img src={signup} alt='logo' />
                    </NavLink>
                </li>
                <li>
                    <div className='personal-links'>
                        <a target="_blank" rel="noopener noreferrer" href='https://github.com/andrea-green'>
                            <i class="fa-brands fa-github fa-3x"></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/andrea-green-201146245/'>
                            <i class="fa-brands fa-linkedin fa-3x"></i>
                        </a>
                    </div>
                </li>
            </ul>
        </nav >
        //     <ul>
        //     </ul>
        // </nav>

    )

}
