import React from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom';
import "./index.css";
// import SignUpPage from '../SingUp';
import SignInPage from '../SignIn';
import Main from "../Main";
import AdminPage from '../Admin';
// import LandingPage from './Landing';
// import HomePage from '../Home';
// import AccountPage from '../Account';
// import PasswordForgetPage from '../PasswordForget';

import * as ROUTES from '../../constants/routes';


const App = () => (
  <Router>
    <div className="App">

      {/*<Route exact path={ROUTES.LANDING} component={LandingPage} />*/}
      {/*<Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />*/}
      {/*<Route path={ROUTES.HOME} component={HomePage} />*/}
      {/*<Route path={ROUTES.ACCOUNT} component={AccountPage} />*/}
      {/*<Route path={ROUTES.SIGN_UP} component={SignUpPage} />*/}
      <Route path={ROUTES.MAIN} exact component={Main} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </div>
  </Router>
);

export default App;