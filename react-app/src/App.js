import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/Users/UsersList';
import User from './components/Users/User';
import { authenticate } from './store/session';
import Body from './components/index';
import SingleNote from './components/Notes';
import AllNotes from './components/Notes/AllNotes';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   (async() => {
  //     await dispatch(authenticate());
  //     setLoaded(true);
  //   });
  // }, [dispatch]);

  useEffect(() => {
    dispatch(authenticate()).then(() => setLoaded(true));
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (

    <>
      <NavBar />
      {/* move nav bar to landing page.  */}
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <Body />
        </Route>
        {/* <Route path='/notes' exact={true} >
        </Route> */}
        <Route path='/notes' exact={true}>
          <AllNotes />
        </Route>
        <Route path='/notes/:noteId'>
          <SingleNote />
        </Route>
      </Switch>
      </>

  );
}

export default App;
