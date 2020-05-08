import React, { Component } from 'react'
import logo from '../images/logos.jpg'
import "./register.css"
class Signup extends Component {
constructor(){
    super();
    this.state={
        OrganisationName:'',
        Cinnumber:'',
        Address:'',
        email:'',
        accountPassword:'',
        Password:''
    }
}
handleChange = event =>{
    this.setState({[event.target.name]:[event.target.value]})
}
handleSubmit = event =>{
    event.preventDefault();
    console.log("Organisation Name"+this.state.OrganisationName);
    console.log("Cin Number"+this.state.Cinnumber);
    console.log("Address"+this.state.Address);
    console.log("Email"+this.state.email);
    console.log("Account Password"+this.state.accountPassword);
    console.log("Password"+this.state.Password);
    const url = 'http://117.221.237.210:4000/brand/users/register';
    var data = {
    bandName : this.state.OrganisationName[0],
    accountPassword : this.state.Password[0] ,
    brandAddress : this.state.Address[0],
    identificationDetail: {
        regNo: "12345",
        cinNo: this.state.Cinnumber[0]
      },
    emailAddress: this.state.email[0],
    phoneNo: 9677795798,
    brandAssets: {
        brandLogoSrc: "logo",
        brandColor: "yellow",
        brandSoundTrack: "piano"
    }

}
console.log(data);
    fetch(url,{
    method:'POST',
    body:JSON.stringify(data),
headers:{'Content-Type':'application/json'}
})
    .then(res =>res.json())
    .catch(error => console.error("Show me error that cannot be specify",error))
    .then(response => console.log("Success:",response))
    }

  render(){
    return(
    <div>
        <div className="body_signup">
            <div className="row">
                <div className="col-md-3" />
                <div className="col-md-6">
                <div className="card_signup">
                <img src={logo} alt="hello" />
                <div className="row inner-option">
                <div className="col-md-3" />
                <div className="col-md-6">
                <h2>SIGN-UP</h2>
            </div>
            <div className="col-md-3">
            </div>
        </div>
          <div className="row">
              <div className="col-md-12">
              <form className="form" id="details" onSubmit={this.handleSubmit}>

                  <div id="part1">
                   <div class="form-group">
                     <input type="text"  name="OrganisationName" class="form-control" id="name" placeholder="Your Organisation Name" onChange={this.handleChange} required/>
                   </div>
                   <div class="form-group">
                     <input type="text"  name="Cinnumber" class="form-control" id="cin" placeholder="Your Corporate Identification Number" onChange={this.handleChange} required/>
                   </div>
                 </div>
                 <div id="part2">
                   <div class="form-group">
                     <input type="text"  name="Address" class="form-control" id="name" placeholder="Organisation Address" onChange={this.handleChange} required/>
                   </div>
                   <div class="form-group">
                     <input type="email"  name="email" class="form-control" id="cin" placeholder="Organisation E-mail"  onChange={this.handleChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/>
                   </div>
                 </div>
                 <div id="part3">
                   <div class="form-group">
                     <input type="password"   name="accountPassword" class="form-control" id="pswrd" placeholder="Account Password" onChange={this.handleChange}
    title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" required/>
                   </div>
                   <div class="form-group">
                     <input type="password" class="form-control" name="Password" id="cpswrd" placeholder="Confirm Password" onChange={this.handleChange} required/>
                   </div>
                   <div class="form-group">
                   <input type="file" id="myFile" name="brandLogoSrc" values=""  onChange={this.handleChange}/>

                   </div>

                   <button class="btn btn-primary" type="submit" >SIGN UP</button>
                 </div>
              </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3" />
      </div>
        </div>
        </div>
    )
}
}
export default Signup
