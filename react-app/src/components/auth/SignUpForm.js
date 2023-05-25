import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import gif7 from '../graphics/gif7.gif';
import { useModal } from '../../context/Modal';
import './index.css';



const SignUpForm = () => {
    const [errors, setErrors] = useState([]);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const { closeModal } = useModal();

    const onSignUp = async (e) => {
        e.preventDefault();
        if (password === repeatPassword) {
            const data = await dispatch(signUp(username, email, password));
            if (data) {
                setErrors(data)
            }
        } else {
            setErrors(['passwords do not match'])
        }
    };

    const updateUsername = (e) => {
        setUsername(e.target.value);
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    const updateRepeatPassword = (e) => {
        setRepeatPassword(e.target.value);
    };

    if (user) {
        closeModal();
        return <Redirect to='/home' />;
    }

    return (
        <div className='contact-main'>
            <div className='signup-left-side'>
                <img src={gif7} alt='gif7' />
            </div>

            <div className='right-side'>
                <div className='form-header'>
                    <h2>Sign Up </h2>
                    <button
                        type='submit'
                        onClick={closeModal}
                        style={{ cursor: 'pointer' }}
                    > X </button>
                </div>
                <form className='sign-up-main' onSubmit={onSignUp}>
                    <div>
                        {errors.map((error, ind) => (
                            <div style={{ color: '#5e17eb' }} key={ind}>{error}</div>
                        ))}
                    </div>
                    <div className='signup-input' >
                        <label>Username</label>
                        <input
                            type='text'
                            name='username'
                            onChange={updateUsername}
                            value={username}
                        ></input>
                    </div>
                    <div className='signup-input'>
                        <label>Email</label>
                        <input
                            type='email'
                            name='email'
                            onChange={updateEmail}
                            value={email}
                        ></input>
                    </div>
                    <div className='signup-input'>
                        <label>Password</label>
                        <input
                            type='password'
                            name='password'
                            onChange={updatePassword}
                            value={password}
                        ></input>
                    </div>
                    <div className='signup-input'>
                        <label>Repeat Password</label>
                        <input
                            type='password'
                            name='repeat_password'
                            onChange={updateRepeatPassword}
                            value={repeatPassword}
                            required={true}
                        ></input>
                    </div>
                    <button className='form-submit-button'type='submit'>Sign Up</button>
                    {/* <button className='form-submit-button'type='submit'>Sign Up</button> */}
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;
