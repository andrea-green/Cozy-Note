import React from 'react';
import { NavLink } from 'react-router-dom';
import DemoUser from '../Users/DemoUser';
import { useSelector } from 'react-redux';
import logIn from '../graphics/login.png';
import logo from '../graphics/cozy-note2-logo.png'
import signup from '../graphics/signup-head.png'
import repo from '../graphics/repo.png';
import contact from '../graphics/contact.png';
import './LandingPage.css';
import OpenModalButton from '../OpenModalButton';
import ContactForm from './ContactForm';





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
                <li className='nav-button'>
                    <NavLink to='/sign-up' exact={true} activeClassName='active'>
                        <img src={signup} alt='logo' />
                    </NavLink>
                </li>
                <li className='nav-button'>
                    <a target='_blank' rel='noopener noreferrer' href="https://github.com/andrea-green/Cozy-Note" exact={true} activeClassName='active'>
                        <img src={repo} alt='logo' />
                    </a>
                </li>
                <li className='nav-button'>
                    <OpenModalButton
                        modalComponent={<ContactForm />}
                        image={contact}
                    />
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
                <li className='login'>
                    <NavLink to='/login' exact={true} activeClassName='active'>
                        <img src={logIn} alt='logo' />
                    </NavLink>
                </li>
            </ul>
        </nav >
        //     <ul>
        //     </ul>
        // </nav>

    )

}
