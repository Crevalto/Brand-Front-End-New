import React from 'react';
import './App.css';
import Home from './components/home/Home'
import Navig from './components/Navigation_bar/Navig'
import Login from './components/login/login'
import Register from './components/sign_up/register'
import Landing from './components/landing/Landing'
import Pagenotfound from './components/404/pagenotfound'
import Greeting from './components/greeting/greeting'
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';

import Merchant from './components/map_merchant/Mapmerchant'



function App() {
  return (
    <div>
        <Navig/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/merchant" component={Merchant}/>
          <Route exact path="/landing" component={Landing}/>
          <Route exact path="/greeting" component={Greeting}/>
          <Route component={Pagenotfound}/>
      </Switch>

      </div>
  );
}
export default App;
