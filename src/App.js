import React from 'react';
import './App.css';
import Home from './components/home/Home'
import Navig from './components/Navigation_bar/Navig'
import Login from './components/login/login'
import Register from './components/sign_up/register'
import Landing from './components/landing/Landing'
import Pagenotfound from './components/404/pagenotfound'
import Greeting from './components/greeting/greeting'
import Verify from './components/verify_otp/verify_otp'
import Products from './components/products/product'
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
<<<<<<< HEAD
          <Route  path="/verify/:slug" component={Verify}/>
=======
          <Route exact path="/verify" component={Verify}/>
          <Route exact path="/products" component={Products}/>
>>>>>>> e9c4d7c0418f77b03c72a84a4473cc170f206e13
          <Route component={Pagenotfound}/>
      </Switch>

      </div>
  );
}
export default App;

