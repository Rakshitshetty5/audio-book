import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component';
import BookInfoPage from './pages/book-info/book-info.component'
import SignInAndSignUpPage from './pages/signin-signup/signin-signup.component'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = '/auth' component={ SignInAndSignUpPage } />
        <Route exact path='/' component={HomePage} />
        <Route path = {`/:id`} component = { BookInfoPage } />
      </Switch>
    </div>
  );
}

export default App;
