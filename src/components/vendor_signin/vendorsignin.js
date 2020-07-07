import React, { Component } from "react";
import "./vendorsin.css";
import logo from "../images/no_bg_noname.png";
import suc from "./successreg";
class vendor_signin extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
  }
  state = {
    visible: false,
  };
  toggle() {
    document.querySelector(".cont").classList.toggle("s--signup");
  }

  render() {
    return (
      <div className="reg_body">
        <div class="paddertop">
          {this.state.visible ? (
            <div>
              {" "}
              <suc></suc>
            </div>
          ) : //     <div class="alert alert-success" role="alert">
          //   <h4 class="alert-heading">Thank you ! for Registering in Creavlto</h4>
          //   <p>Your request is in progress! </p>
          //   <p>
          //     your details are validating and we will be sending an email within 24
          //     hours regards registration successful
          //   </p>
          // </div>
          null}
          <div class="cont">
            <div class="form sign-in">
              <img src={logo} alt="logo" width="100px" height="100px" />
              <h2>Welcome back,</h2>
              <label>
                <span>Email</span>
                <input type="email" />
              </label>
              <label>
                <span>Password</span>
                <input type="password" />
              </label>
              <p class="forgot-pass">Forgot password?</p>
              <button type="button" class="submit">
                Sign In
              </button>
            </div>
            <div class="sub-cont">
              <div class="img">
                <div class="img__text m--up">
                  <h2>New here?</h2>
                  <p>Sign up to light your workers life!</p>
                </div>
                <div class="img__text m--in">
                  <h2>One of us?</h2>
                  <p>
                    If you already has an account, just sign in. We've missed
                    you!
                  </p>
                </div>
                <div class="img__btn" onClick={this.toggle}>
                  <span class="m--up">Sign Up</span>
                  <span class="m--in">Sign In</span>
                </div>
              </div>

              <div class="signup">
                <img src={logo} alt="logo" width="100px" height="100px" />
                <h2>Let's built your Shop,</h2>
                <label>
                  <span>Name</span>
                  <input type="text" />
                </label>
                <label>
                  <span>Email</span>
                  <input type="email" />
                </label>
                <label>
                  <span>GST Number</span>
                  <input type="text" />
                </label>
                <label>
                  <span>Password</span>
                  <input type="password" />
                </label>

                <button
                  type="button"
                  class="submit"
                  onClick={() => {
                    this.setState({ visible: true });
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default vendor_signin;
