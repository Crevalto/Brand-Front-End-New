import React, { Component } from "react";
import "./vendorsin.css";
import logo from "../images/no_bg_noname.png";
<<<<<<< HEAD
import suc from "./successreg";
=======
import Cookies from "universal-cookie"
>>>>>>> 9b41c31b17df648ffd439b97519d1629fd3f6743
class vendor_signin extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state={
      email:"",
      Email:"",
      password:"",
      npassword:"",
      name:"",
      gstno:"",
      token:""
    }
  }
<<<<<<< HEAD
  state = {
    visible: false,
=======
  handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value});
  }
  handleSubmit=(event)=>{
    event.preventDefault();
    const cookies=new Cookies();
    const url="http://Crevalto-server.herokuapp.com/v1/vendor/login"
    var Data={
      email:this.state.email,
      password:this.state.password
    }
      fetch(url,{
    method: "POST",
    body : JSON.stringify(Data),
    headers :{"Content-Type": "application/json" },
  })
  .then((res)=> res.json())
  .catch((error) =>
        console.error("Show me error that cannot be specify", error)
      )
    .then((response)=>{
      console.log("Success",response)
      console.log(this.state.email)
      this.props.history.push("/vendorsignin");
    }) 
  };
  
  handleClick=(event)=>{
    event.preventDefault();
    const url="http://crevaltoserver.herokuapp.com/v1/vendor/register"
    var data={
      Name:this.state.Name,
      Email:this.state.Email,
      GSTNO:this.state.gstno,
      Password:this.state.password,
  }
    fetch(url,{
    method: "POST",
    body : JSON.stringify(data),
    headers :{"Content-Type": "application/json" },
  })
  .then((res)=> res.json())
  .catch((error) =>
        console.error("Show me error that cannot be specify", error)
      )
    .then((response)=>{
      console.log(response)
      console.log(this.state.Name)
       console.log(this.state.Email)
        console.log(this.state.gstno)
         console.log(this.state.npassword)
      this.toggle()
    })
>>>>>>> 9b41c31b17df648ffd439b97519d1629fd3f6743
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
                <input type="email" name="email" onChange={this.handleChange} value={this.state.email}/>
              </label>
              <label>
                <span>Password</span>
                <input type="password" name="password"onChange={this.handleChange} value={this.state.password}/>
              </label>
              <p class="forgot-pass">Forgot password?</p>
              <button type="button" class="submit" onClick={this.handleSubmit} >
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
                  <input type="text" name="Name" onChange={this.handleChange} value={this.state.Name}/>
                </label>
                <label>
                  <span>Email</span>
                  <input type="email" name="Email" onChange={this.handleChange} value={this.state.Email}/>
                </label>
                <label>
                  <span>GST Number</span>
                  <input type="text" name="gstno" onChange={this.handleChange} value={this.state.gstno}/>
                </label>
                <label>
                  <span>Password</span>
                  <input type="password" name="npassword" onChange={this.handleChange} value={this.state.npassword}/>
                </label>
<<<<<<< HEAD

                <button
                  type="button"
                  class="submit"
                  onClick={() => {
                    this.setState({ visible: true });
                  }}
                >
=======
                <button type="button" class="submit" onClick={this.handleClick}>
>>>>>>> 9b41c31b17df648ffd439b97519d1629fd3f6743
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
