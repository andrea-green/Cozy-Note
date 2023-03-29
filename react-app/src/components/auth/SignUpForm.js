// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux'
// import { Redirect } from 'react-router-dom';
// import { signUp } from '../../store/session';
// import signUpButton from '../images/sign-up-button.png'

// const SignUpForm = () => {
//   const [errors, setErrors] = useState([]);
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [repeatPassword, setRepeatPassword] = useState('');
//   const user = useSelector(state => state.session.user);
//   const dispatch = useDispatch();

//   const onSignUp = async (e) => {
//     e.preventDefault();
//     if (password === repeatPassword) {
//       const data = await dispatch(signUp(username, email, password));
//       if (data) {
//         setErrors(data)
//       }
//     } else {
//       setErrors(['passwords do not match'])
//     }
//   };

//   const updateUsername = (e) => {
//     setUsername(e.target.value);
//   };

//   const updateEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const updatePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   const updateRepeatPassword = (e) => {
//     setRepeatPassword(e.target.value);
//   };

//   if (user) {
//     return <Redirect to='/home' />;
//   }

//   return (
//     <form className='sign-up-main' onSubmit={onSignUp}>
//       <div className='sign-up-header'>
//         <img src={signUpButton} />
//       </div>
//       <div>
//         {errors.map((error, ind) => (
//           <div style={{ color: '#b05217' }} key={ind}>{error}</div>
//         ))}
//       </div>
//       <div className='sign-up-inputs'>

//       </div>
//       <div style={{
//         padding: '5px',
//         marginLeft: '0.5rem',
//         fontSize: '25px'
//       }}>
//         <label>User Name</label>
//         <input
//           type='text'
//           name='username'
//           onChange={updateUsername}
//           value={username}
//         ></input>
//       </div>
//       <div style={{
//         padding: '5px',
//         marginLeft: '0.5rem',
//         fontSize: '25px'
//       }}>
//         <label>Email</label>
//         <input
//           type='email'
//           name='email'
//           onChange={updateEmail}
//           value={email}
//         ></input>
//       </div>
//       <div style={{
//         padding: '5px',
//         marginLeft: '0.5rem',
//         fontSize: '25px'
//       }}>
//         <label>Password</label>
//         <input
//           type='password'
//           name='password'
//           onChange={updatePassword}
//           value={password}
//         ></input>
//       </div>
//       <div style={{
//         padding: '5px',
//         marginLeft:'0.5rem',
//         fontSize: '25px'
//       }}>
//         <label>Repeat Password</label>
//         <input
//           type='password'
//           name='repeat_password'
//           onChange={updateRepeatPassword}
//           value={repeatPassword}
//           required={true}
//         ></input>
//       </div>
//       <button type='submit'>Sign Up</button>
//     </form>
//   );
// };

// export default SignUpForm;
