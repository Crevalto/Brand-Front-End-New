import React, { Component } from 'react'
import {Nav,Form,Button,Row,Col} from 'react-bootstrap'
import logo from '../images/purple_bg_noname.jpg';
import {Popover, PopoverHeader, PopoverBody } from 'reactstrap'
import {Link} from 'react-router-dom'
import './Navig.css'


class Navig extends Component {
  constructor(){
    super()
    this.toggle=this.toggle.bind(this)
    this.handleChange=this.handleChange.bind(this);
    this.handleclick=this.handleclick.bind(this);
    this.changetoggle=this.changetoggle.bind(this);
    this.logout=this.logout.bind(this);
    if(localStorage.getItem('loggedin')==null){
        localStorage.setItem('loggedin',false);
    }

    if(localStorage.getItem('compname')==null){
        localStorage.setItem('compname',"");
    }



    this.state={
      loggedin: localStorage.getItem('loggedin'),
      credentials:'',
      email:'',
      password:'',
      popoverOpen:false,
      cmpname: localStorage.getItem('compname')
    }


  }



  handleChange(e){

    this.setState({[e.target.name]:[e.target.value]});
  }

    handleclick(e){
        e.preventDefault()
        document.getElementById("button_disable").disabled=true;
     const url = 'http://crevaltobkend.herokuapp.com/brand/users/login';
    var data = {
      emailAddress : this.state.email[0],
      accountPassword : this.state.password[0],
    }
    console.log(data);
        fetch(url,{
        method:'POST',
        body:JSON.stringify(data),
    headers:{'Content-Type':'application/json'}
    })
    .then(res =>res.json())
    .catch(error => console.error("Show me error that cannot be specify",error))
    .then(response => {console.log("Success:",response)
                if(response.status===false){
                  document.getElementById("button_disable").disabled=false;
                  document.getElementById("status").innerHTML = response.error;
                }
                else{
                  document.getElementById("status").style.color="green";
                  document.getElementById("status").innerHTML = "Logged in";
                  this.setState({popoverOpen:!(this.state.popoverOpen),cmpname:response.name,loggedin:true});
                  localStorage.setItem('loggedin',true);
                  localStorage.setItem('token',response.token)
                  localStorage.setItem('compname',response.name)

                }
  })
  }


  logout(){
    localStorage.setItem('loggedin',false)
    localStorage.setItem('compname',"")

    this.setState({popoverOpen:!(this.state.popoverOpen),cmpname:"",loggedin:"false"})
  }

  toggle (){

  this.setState({popoverOpen:!(this.state.popoverOpen)});
  }

changetoggle(){
  this.setState({popoverOpen:!(this.state.popoverOpen)});

}

  render(){
  console.log(this.state.loggedin)
    return (
        <div class="navig">
            <div class="row">
              <div class="col-md-2">
                <img class="pull-left" src={logo} alt="logo"/>
                <h2>Crevalto</h2>
              </div>
              <div class="col-md-7">
                <form>
                  <input type="input" name="search" placeholder="SEARCH"/>
                </form>
              </div>
              <div class="col-md-3" style={{paddingLeft:'0px'}}>
                    <Nav className="smalls">
                      <Nav.Link href="/home">
                      <svg class="bi bi-house-fill" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z" clip-rule="evenodd"/>
                        <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 011.414 0l6.647 6.646a.5.5 0 01-.708.708L8 2.207 1.354 8.854a.5.5 0 11-.708-.708L7.293 1.5z" clip-rule="evenodd"/>
                        </svg>
                      </Nav.Link>
                      <Nav.Link  id="Popover1" >
                      {this.state.loggedin==="false"?
                      <svg class="bi bi-person" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002.002zM8 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z" clip-rule="evenodd"/>
                      </svg>
                      :<svg class="bi bi-person-check-fill" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 100-6 3 3 0 000 6zm9.854-2.854a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 01.708-.708L12.5 7.793l2.646-2.647a.5.5 0 01.708 0z" clip-rule="evenodd"/>
                    </svg>}
                      </Nav.Link>
                      <Nav.Link href="/cart">
                      <svg class="bi bi-geo-alt" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10zm0-7a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
                    </svg>
                    </Nav.Link>
                    <Nav.Link href="/cart">
                    <svg class="bi bi-chat-fill" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 008 15z"/>
                    </svg>
                    </Nav.Link>
                    <Nav.Link href="/cart">Cart</Nav.Link>
                    </Nav>

                  {
                  this.state.loggedin === "false"
                  ?
                        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                          <PopoverHeader>Sign In</PopoverHeader>
                          <PopoverBody>
                             <Form>
                                   <div class="form-group">
                                     <input type="email" name="email" class="form-control" onChange={this.handleChange} value={this.state.email} id="exampleInputEmail1" placeholder="Email" required/>
                                   </div>
                                   <div class="form-group">
                                     <input type="password" name="password" onChange={this.handleChange} value={this.state.password} class="form-control" id="exampleInputPassword1" placeholder="Password" required/>
                                   </div>
                                   <p id="status"></p>
                                   <Row>
                                     <Col md={1}></Col>
                                     <Col>
                                   <Button type="submit" onClick={this.handleclick} id="button_disable" class="btn btn-primary">Log-in</Button><br/>
                                   </Col>
                                   <Col>
                                    <Link to="/register"><Button onClick={this.changetoggle} id="button_disable" class="btn btn-danger">Sign-up</Button></Link>
                                    </Col>
                                    <Col md={1}></Col>
                                    </Row>
                                 </Form>
                          </PopoverBody>
                        </Popover>
                  :
                  <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                  <PopoverHeader style={{textTransform:'capitalize'}}>Welcome, {this.state.cmpname}</PopoverHeader>
                  <PopoverBody  style={{lineHeight:'2rem'}}>
                          <Link className="popovereff"  to={`/dashboard/${this.state.cmpname}`} >Dashboard</Link>
                          <br/>
                          <a className="popovereff" href="/">CSR</a>
                          <br/>
                          <a className="popovereff" href="/" >Payments</a>
                          <br/>
                          <a className="popovereff" href="/">Your Orders</a>
                          <hr/>
                          <h6 style={{cursor:'pointer',color:'red'}} onClick={this.logout}>Logout</h6>
                  </PopoverBody>
                  </Popover>
                    }

              </div>
            </div>
        </div>
    )
}

}
export default Navig
