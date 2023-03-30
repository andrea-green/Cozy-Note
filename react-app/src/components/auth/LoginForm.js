import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import { useModal } from '../../context/Modal';
import logIn from '../graphics/login.png';

const LoginForm = () => {
    const [errors, setErrors] = useState([]);
    const { closeModal } = useModal();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const onLogin = async (e) => {
        e.preventDefault();
        const data = await dispatch(login(email, password));
        if (data) {
            setErrors(data);
        }
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    if (user) {
        return <Redirect to='/home' />;
    }

    return (
        <div className='contact-main'>
            <div className='signup-left-side'>
                <img src={logIn} alt='logIn' />
            </div>

            <div className='right-side'>
                <div className='form-header'>
                    <h2>Login</h2>
                    <button
                        type='submit'
                        onClick={closeModal}
                        style={{ cursor: 'pointer' }}
                    > X </button>
                </div>
                <form className='login-form-main' onSubmit={onLogin}>
                    <div>
                        {errors.map((error, ind) => (
                            <div style={{ color: '#b05217' }} key={ind}>{error}</div>
                        ))}
                    </div>
                    <div style={{
                        padding: '5px',
                        margin: '5px',
                        fontSize: '25px'
                    }}>
                        <label htmlFor='email'>Email</label>
                        <input
                            name='email'
                            type='text'
                            placeholder='Email'
                            value={email}
                            onChange={updateEmail}
                            style={{ marginLeft: '1rem' }}
                        />
                    </div>
                    <div style={{
                        padding: '5px',
                        marginBottom: '5px',
                        fontSize: '25px'
                    }}>
                        <label htmlFor='password'>Password</label>
                        <input
                            name='password'
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={updatePassword}
                            style={{ marginLeft: '1rem' }}
                        />
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
