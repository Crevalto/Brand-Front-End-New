import React, { Component } from 'react';
//import ReactPlayer from 'react-player'
import './verify.css'
import { withRouter } from "react-router-dom";

class Home extends Component {
constructor(){
    super()
    this.handlechange=this.handlechange.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.state={
      otp:"",
      val1:"",
      val2:"",
      val3:"",
      val4:""
    }
}

componentDidMount(){
 this.setState({otp: this.props.match.params.slug })
 }

handlechange(e){
  this.setState({
  [e.target.name]: e.target.value
  })

}

  

handleClick(e){

  const val=this.state.otp.split('_')
  if(this.state.val1+this.state.val2+this.state.val3+this.state.val4===val[0])
  {
    const url = 'https://crevaltobkend.herokuapp.com/brand/users/verify';
    var data = {
      emailAddress :val[1] 
    }

    console.log(val[1]);  
        fetch(url,{
        method:'POST',
        body:JSON.stringify(data),
    headers:{'Content-Type':'application/json'} 
    })
    .then(res =>res.json())
    .catch(error => console.error("Show me error that cannot be specify",error))
    .then(response =>{ console.log("Success:",response)
    if(response.status===true){       
            this.props.history.push("/")
          alert(response.message)  
          }
            else{
            alert(response.error)
            }
      })
 

  }else{
    alert("vicky")
  }
}

  render(){
  return (
    <div className="verify_otp">
      <div class="row">
          <div class="col-md-3">
          </div>
          <div class="col-md-6">
            <div class="card-mail">
                <h1>* * * *</h1>
                <h2>VERIFY OTP</h2>
                <p>Check your autorized mail for OTP or proceed to verify later</p>
                <div class="row">
                  <form>
                    <input type="number" name="val1" onChange={this.handlechange} value={this.state.val1} placeholder="0"/>
                    <input type="number" name="val2" onChange={this.handlechange} value={this.state.val2} placeholder="0"/>
                    <input type="number" name="val3" onChange={this.handlechange} value={this.state.val3} placeholder="0"/>
                    <input type="number" name="val4"onChange={this.handlechange} value={this.state.val4} placeholder="0"/>
                  </form>
                </div>
                <p id="status"></p>
                <div class="row">
                  <div class="col-md-1">
                  </div>
                  <div class="col-md-5">
                    <button class="btn">Resend</button>
                  </div>
                  <div class="col-md-5">
                    <button onClick={this.handleClick} class="btn">Verify</button>
                  </div>
                </div>
            </div>
          </div>
          <div class="col-md-3">

          </div>
      </div>
    </div>
  );

}
}
export default withRouter( Home);
