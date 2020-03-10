import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../../SignupLogin/SignUp';
import SignInPage from '../../SignupLogin/SignIn';
import PasswordForgetPage from '../../SignupLogin/PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../../SignupLogin/Admin';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../../SignupLogin/Session';
import MoviesLanding from '../MoviesLanding'
function App() {
  const [navState, setNavState] = useState("")
  console.log(navState)
  if (navState === "Movies") {
    return (
      <div>
        <Navigation function={setNavState} />
        <hr />
        <MoviesLanding />
        </div>
    )
  } else if (navState === "Television") {
    return(
      <div>YOU NEED TO MAKE TELEVSION LANDING</div>
    )
  }

  else if (navState === "Actors") {
    return(
      <div>YOU NEED TO MAKE ACTORS LANDING</div>
    )
  }

  return (
    <Router>
      <div>
        <Navigation function={setNavState} />
        <hr />
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route
          path={ROUTES.PASSWORD_FORGET}
          component={PasswordForgetPage}
        />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
      </div>
    </Router>
  )
}
export default withAuthentication(App);