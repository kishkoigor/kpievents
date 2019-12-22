// import React, {Component} from 'react';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
// import Navigation from '../Navigation';
//
// // import LandingPage from '../Landing';
// import SignUpPage from '../../components/SingUp';
// import SignInPage from '../../components/SingIn';
// // import PasswordForgetPage from '../PasswordForget';
// // import HomePage from '../Home';
// // import AccountPage from '../Account';
// import AdminPage from '../Admin';
//
//
// import * as ROUTES from '../../constants/routes';
//
//
// class App extends Component{
//
//   render() {
//     return(
//       <div className="AppContainer">
//         <DayBlock />
//       </div>
//     );
//   }
//
// }
//
// class DayBlock extends Component{
//
//   render(){
//     return(
//       <div className="DayBlock">
//         <div className="DayBlockHeader">
//           <div className="weekday">Пн</div>
//           <div className="date">23.10</div>
//         </div>
//         <div className="EventList">
//           <div className="eventtitle">Якийсь класний івент з дуже коротким заголовком</div>
//           <div className="eventtitle">Якийсь класний івент з дуже коротким заголовком</div>
//           <div className="eventtitle">Якийсь класний івент з дуже коротким заголовком</div>
//         </div>
//       </div>
//     )
//   }
// }
//
// export default App;

import React from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom';
import "./index.css";
// import SignUpPage from '../SingUp';
import SignInPage from '../SignIn';
// import LandingPage from './Landing';
// import HomePage from '../Home';
// import AccountPage from '../Account';
// import PasswordForgetPage from '../PasswordForget';


import AdminPage from '../Admin';

import * as ROUTES from '../../constants/routes';
import Main from "../Main";

const App = () => (
  <Router>
    <div className="App">

      {/*<Route exact path={ROUTES.LANDING} component={LandingPage} />*/}
      {/*<Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />*/}
      {/*<Route path={ROUTES.HOME} component={HomePage} />*/}
      {/*<Route path={ROUTES.ACCOUNT} component={AccountPage} />*/}
      {/*<Route path={ROUTES.SIGN_UP} component={SignUpPage} />*/}
      <Route path={ROUTES.MAIN} component={Main} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </div>
  </Router>
);

export default App;