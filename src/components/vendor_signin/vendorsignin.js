import React, { Component } from "react";
import "./vendorsin.css";
import logo from "../images/no_bg_noname.png";

class vendor_signin extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.togglingcard = this.togglingcard.bind(this);
    this.state = {
      email: "",
      Email: "",
      password: "",
      npassword: "",
      togglingcard: false,
      name: "",
      token: "",
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const url = "http://Crevalto-server.herokuapp.com/v1/vendor/login";
    var Data = {
      email: this.state.email,
      password: this.state.password,
    };
    fetch(url, {
      method: "POST",
      body: JSON.stringify(Data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Show me error", error))
      .then((response) => {
        console.log("Success", response);
        console.log(this.state.email);
        this.props.history.push("/");
      });
  };

  handleClick = (event) => {
    event.preventDefault();
    this.props.history.push({
      pathname: "/vendorsignin",
      state: {
        Regdetails: {
          Name: this.state.Name,
          Email: this.state.Email,
          Password: this.state.npassword,
        },
      },
    });
  };

  toggle() {
    document.querySelector(".cont").classList.toggle("s--signup");
  }

  togglingcard() {
    this.setState({ togglingcard: !this.state.togglingcard });
    //document.querySelector(".cont-1").getEle
  }

  render() {
    return (
      <div className="reg_body">
        <div class="paddertop">
          <div class="cont">
            <div class="form sign-in">
              <img src={logo} alt="logo" width="100px" height="100px" />
              <h2>Welcome back,</h2>
              <form onSubmit={this.handleSubmit}>
                <label>
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    onChange={this.handleChange}
                    value={this.state.email}
                  />
                </label>
                <label>
                  <span>Password</span>
                  <input
                    type="password"
                    name="password"
                    required
                    onChange={this.handleChange}
                    value={this.state.password}
                  />
                </label>
                <p class="forgot-pass">Forgot password?</p>
                <button type="submit" class="submit">
                  Sign In
                </button>
              </form>
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
                <form onSubmit={this.handleClick}>
                  <label>
                    <span>Name</span>
                    <input
                      type="text"
                      name="Name"
                      onChange={this.handleChange}
                      value={this.state.Name}
                      required
                    />
                  </label>
                  <label>
                    <span>Email</span>
                    <input
                      type="email"
                      name="Email"
                      onChange={this.handleChange}
                      value={this.state.Email}
                      required
                    />
                  </label>
                  <label>
                    <span>Password</span>
                    <input
                      type="password"
                      name="npassword"
                      onChange={this.handleChange}
                      value={this.state.npassword}
                      required
                    />
                  </label>
                  <button type="submit" class="submit">
                    Get Started
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/*responsive*/}

          <div class="cont-com">
            {this.state.togglingcard === false ? (
              <div class="cont-1">
                <div class="form-1 sign-in">
                  <img src={logo} alt="logo" width="100px" height="100px" />
                  <h2>Welcome back,</h2>
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      <span>Email</span>
                      <input
                        type="email"
                        name="email"
                        required
                        onChange={this.handleChange}
                        value={this.state.email}
                      />
                    </label>
                    <label>
                      <span>Password</span>
                      <input
                        type="password"
                        name="password"
                        required
                        onChange={this.handleChange}
                        value={this.state.password}
                      />
                    </label>
                    <p class="forgot-pass">Forgot password?</p>
                    <button type="submit" class="submitsignin">
                      Sign In
                    </button>
                  </form>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "purple",
                      marginBottom: "5px",
                    }}
                    onClick={this.togglingcard}
                  >
                    New here?
                  </p>
                  <p style={{ fontSize: "12px" }} onClick={this.togglingcard}>
                    Sign up to light your workers life!
                  </p>
                </div>
              </div>
            ) : (
              <div class="cont-2">
                <div class="form-2">
                  <img src={logo} alt="logo" width="100px" height="100px" />
                  <h2>Let's built your Shop,</h2>
                  <form onSubmit={this.handleClick}>
                    <label>
                      <span>Name</span>
                      <input
                        type="text"
                        name="Name"
                        onChange={this.handleChange}
                        value={this.state.Name}
                        required
                      />
                    </label>
                    <label>
                      <span>Email</span>
                      <input
                        type="email"
                        name="Email"
                        onChange={this.handleChange}
                        value={this.state.Email}
                        required
                      />
                    </label>
                    <label>
                      <span>Password</span>
                      <input
                        type="password"
                        name="npassword"
                        onChange={this.handleChange}
                        value={this.state.npassword}
                        required
                      />
                    </label>
                    <button type="submit" class="submit">
                      Get Started
                    </button>
                  </form>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "purple",
                      marginBottom: "5px",
                    }}
                    onClick={this.togglingcard}
                  >
                    One of us?
                  </p>
                  <p style={{ fontSize: "12px" }} onClick={this.togglingcard}>
                    If you already has an account, just sign in.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default vendor_signin;
