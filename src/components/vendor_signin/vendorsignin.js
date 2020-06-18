import React, { Component } from "react";
import "./vendorsin.css";
import logo from "../images/no_bg_noname.png";
class vendor_signin extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    document.querySelector(".cont").classList.toggle("s--signup");
  }

  render() {
    return (
      <div className="reg_body">
        <div class="paddertop">
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
                <button type="button" class="submit">
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
