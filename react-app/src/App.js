import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';

import User from './components/Users/User';
import { authenticate } from './store/session';
import Body from './components/index';
import SingleNote from './components/Notes';
import AllNotes from './components/Notes/AllNotes';
import SingleNotebook from './components/Notebooks';
import AllNotebooks from './components/Notebooks/AllNotebooks';
import LandingPage from './components/LandingPage'
import AllLists from './components/Lists/AllLists'

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticate()).then(() => setLoaded(true));
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (

    <div className='app-main'>
      <NavBar />
      <Switch>
        <Route path='/' exact={true}>
        <LandingPage />
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/home' exact={true} >
          <Body />
        </ProtectedRoute>
        <ProtectedRoute path='/notes' exact={true}>
          <AllNotes />
        </ProtectedRoute>
        <ProtectedRoute path='/notebooks' exact={true}>
          <AllNotebooks />
        </ProtectedRoute>
        <ProtectedRoute path='/notes/:noteId'>
          <SingleNote />
        </ProtectedRoute>
        <ProtectedRoute path='/lists' exact={true}>
          <AllLists />
        </ProtectedRoute>
      </Switch>
      </div>
  );
}

export default App;
