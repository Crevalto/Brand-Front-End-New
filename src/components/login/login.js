import React from 'react'
import './login.css'
import logo from '../images/logos.jpg'
import {Link} from "react-router-dom"
import {Row,Col,Form, Button} from "react-bootstrap"
function login() {
    return (
  <div className="body">
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
                   <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" required/>
                 </div>
                 <div class="form-group">
                   <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required/>
                 </div>
                 <Button type="submit" class="btn btn-primary">Log-in</Button><br/>
                 <Link to="/register"> <Button  class="btn btn-danger">Sign-up</Button></Link>
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

export default login
