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
import Dashboard from './components/dashboard/dashboard'

import { Route, Switch } from 'react-router-dom';
import Merchant from './components/map_merchant/Mapmerchant'
import Cart from './components/cart/cartdis'

function App() {
  return (
    <div>
        <Navig/>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/greeting" component={Greeting}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          {/* <Route exact path="/merchant" component={Merchant}/> */}
          <Route  path="/verify/:slug" component={Verify}/>
          <Route  path="/products/:slug" component={Products}/>
          <Route  path="/dashboard" component={Dashboard}/>
          <Route component={Pagenotfound}/>
      </Switch>

      </div>
  );
}
export default App;
