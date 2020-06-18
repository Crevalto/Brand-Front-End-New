import React from "react";
import "./App.css";
//import WrappedMap from './components/Map/Map.js'
import Home from "./components/home/Home";
import Navig from "./components/Navigation_bar/Navig";
import Login from "./components/login/login";
import Register from "./components/sign_up/register";
import Landing from "./components/landing/Landing";
import Pagenotfound from "./components/404/pagenotfound";
import Greeting from "./components/greeting/greeting";
import Verify from "./components/verify_otp/verify_otp";
import Products from "./components/products/product";
import Dashboard from "./components/dashboard/dashboard";
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from "react-router-dom";
import Cart from "./components/cart/cartdis";
import Merchant from "./components/map_merchant/Mapmerchant";
import Map from "./components/map/mapgs";
import Mapping from "./components/Mapping/Mapping";
import Single from "./components/SingleShare/SingleShare";

import VendorLogin from "./components/vendor_signin/vendorsignin";
import VendorSignIn from "./components/vendor_signin/signin";
import Mesdet from "./components/vendor_signin/mesdet";

function App() {
  return (
    <div>
      <Navig />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/single" component={Single} />
        <Route exact path="/greeting" component={Greeting} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/mapping" component={Mapping} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/merchant" component={Merchant} />
        <Route path="/verify/:slug" component={Verify} />
        <Route path="/products/:slug" component={Products} />
        <Route path="/dashboard/:slug" component={Dashboard} />

        <Route exact path="/vendorlogin" component={VendorLogin} />
        <Route exact path="/vendorsignin" component={VendorSignIn} />
        <Route exact path="/vera12" component={Mesdet} />

        <Route component={Pagenotfound} />
      </Switch>
    </div>
  );
}
export default App;
