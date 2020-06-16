import React from 'react';
import './App.css';

import { Route, Switch, Redirect,withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { createStructuredSelector } from 'reselect'


import { setCurrentUser } from './redux/user/user.action' 
import { selectCurrentUser } from './redux/user/user.selector'

import HomePage from './pages/homepage/homepage.component';
import BookInfoPage from './pages/book-info/book-info.component'
import SignInAndSignUpPage from './pages/signin-signup/signin-signup.component'
import Header from './components/header/header.component'
import Intro from './pages/intro/intro.component'
import Category from './components/category/category.component'

class App extends React.Component {
  unsubscribeFromAuth = null
  
  componentDidMount(){
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = 

    auth.onAuthStateChanged(async userAuth => {

      if(userAuth){ 

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id : snapShot.id,
            ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth); //userAuth is null
    })
  }


  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  
  render(){
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path = '/' component = {Intro} />
        <Route  path = '/home' component = {HomePage}/>
        <Route 
          path='/' 
          exact
          render={
              (Otherprops) => 
              this.props.currentUser? 
              (<HomePage {...Otherprops}/>)
              :
              ( <Redirect to='/' />)
            }
        />
        <Route 
          exact 
          path = '/auth'
          render = {() => 
            this.props.currentUser ? 
            (
              <Redirect to='/home' />
            ) : 
            (
              <SignInAndSignUpPage />
            ) 
          }
        />
        <Route path = '/:categoryId' component = {Category} />
        {/* <Route exact path = {`/home/:id`} render= {(props) => <BookInfoPage {...props}/> }/> */}

        {/* <Route path = {`/:id`} component = { BookInfoPage } /> */}
      </Switch>
    </div>
  );
  }
}

const mapStateToProps = createStructuredSelector(
  {
    currentUser : selectCurrentUser,
  
  }
) 

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))

})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
