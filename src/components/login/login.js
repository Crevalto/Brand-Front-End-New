import React, { Component } from 'react'
import './login.css'
import logo from '../images/logos.jpg'
import {Link,withRouter} from "react-router-dom"
import {Row,Col,Form, Button} from "react-bootstrap"
import Cookies from "universal-cookie";


class login extends Component {

  constructor(){
    super()
    this.handleChange=this.handleChange.bind(this);
    this.handleclick=this.handleclick.bind(this);
    this.state={
      credentials:'',
      email:'',
      password:''
    }
  }



  handleChange(e){

    this.setState({[e.target.name]:[e.target.value]});


  }

<<<<<<< HEAD
    handleclick(e){
        e.preventDefault()
        const cookies = new Cookies();
        cookies.set('email', this.state.email[0]);
        cookies.set('password', this.state.password[0]);
        console.log(cookies.get('email'))
        this.props.history.push("/");
    
=======
  handleclick(e){
    e.preventDefault()
    const cookies = new Cookies();
    cookies.set('email', this.state.email[0]);
    cookies.set('password', this.state.password[0]);
   console.log(cookies.get('email'))
    //this.history.push("/");


>>>>>>> e9c4d7c0418f77b03c72a84a4473cc170f206e13
    const url = 'http://crevaltobkend.herokuapp.com/brand/users/login';
    var data = {
      emailAddress : this.state.email[0],
      accountPassword : this.state.password[0],
    }

<<<<<<< HEAD
    console.log(data);  
        fetch(url,{
        method:'POST',
        body:JSON.stringify(data),
    headers:{'Content-Type':'application/json'} 
    })
=======
console.log(data);
    fetch(url,{
    method:'POST',
    body:JSON.stringify(data),
headers:{'Content-Type':'application/json'}
})
>>>>>>> e9c4d7c0418f77b03c72a84a4473cc170f206e13
    .then(res =>res.json())
    .catch(error => console.error("Show me error that cannot be specify",error))
    .then(response => console.log("Success:",response))
    }



  render(){
    console.log(this.state.email)
    console.log(this.state.password)
    return (
      <div className="body paddertop">
    <Row >
       <Col md={3}></Col>
       <Col md={6}>
         <div class="card-login">
             <img src={logo} alt="logo"/>
             <Row>
               <Col md={3}></Col>
               <div class="col-md-6">
                 <h2>LOG-IN</h2>
               </div>
               <Col md={3}>
               </Col>
             </Row>
             <Row Row>
               <Col md={12}>
               <Form>
                 <div class="form-group">
                   <input type="email" name="email" class="form-control" onChange={this.handleChange} value={this.state.email} id="exampleInputEmail1" placeholder="Email" required/>
                 </div>
                 <div class="form-group">
                   <input type="password" name="password" onChange={this.handleChange} value={this.state.password} class="form-control" id="exampleInputPassword1" placeholder="Password" required/>
                 </div>
                 <Button type="submit" onClick={this.handleclick} class="btn btn-primary">Log-in</Button><br/>
                  <Link to="/register"><Button  class="btn btn-danger">Sign-up</Button></Link>
               </Form>
             </Col>
             </Row>
         </div>
       </Col>
     <Col md={3}></Col>
   </Row>
  </div>
      )
}
}
export default withRouter( login)
