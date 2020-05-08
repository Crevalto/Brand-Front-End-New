import React from 'react';
import './App.css';
import Home from './components/home/Home'
import Navig from './components/Navigation_bar/Navig'
import Login from './pages/login/login'
import Register from './pages/sign_up/register'
import Landing from './pages/landing/Landing'
import Pagenotfound from './pages/404/pagenotfound'
import Greeting from './pages/greeting/greeting'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';

import Merchant from './pages/Mapmerchant'



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
