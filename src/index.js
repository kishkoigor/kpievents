import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Firebase, { FirebaseContext } from './components/Firebase';

import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './components/App';
import Admin from "./components/Admin";

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>

  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App}/>
      <Route path="/somehiddenurl" exact component={Admin}/>
    </Switch>
  </BrowserRouter>

  </FirebaseContext.Provider>,
document.getElementById('root'),
);

serviceWorker.unregister();