import React, { Component } from 'react'
//import {Card} from 'react-bootstrap'
//import {Link} from 'react-router-dom'
import logo from '../images/white_bg_noname.jpg'
import './dashboard.css'


 class prodcat extends Component {
   state={
       services:[],
       regno:'',
       cinno:'',
       brandBackgroundGround:{
         background:'#5f1874'
       },
       brandColor:{
         color:'#5f1874'
       },
       initstate:false
    }

   componentDidMount(){
        const url='https://crevaltobkend.herokuapp.com/brand/users/profile/'+this.props.match.params.slug ;
        var bearer='Bearer'+localStorage.getItem('token')
        fetch(url,{
            method:'GET',
            headers:{
          'Authorization':bearer,
          'Content-Type':'application/json'}
        })
       .then(response => response.json()

       )
       .then((jsonData) => {
         this.setState({ services:jsonData})
         console.log(this.state.services)
         this.setState({cinno:this.state.services.bid.cinNo})
         this.setState({regno:this.state.services.bid.regNo})

       })
       .catch((error) => {
         // handle your errors here
         console.error(error)
       })

   }
    render(){
        return (
        <div class="dashboard-body paddertop">
          <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10">
              <div class="row card-dash">
                  <div class="col-md-2" style={this.state.brandBackgroundGround}>
                    <img src={logo} alt="Brand logo"/>
                    <ul>
                      <li class="active">Link1</li>
                      <li>Link2</li>
                      <li>Link3</li>
                      <li>Link4</li>
                    </ul>
                  </div>
                  <div class="col-md-9">
                    <h2 style={this.state.brandColor}>{localStorage.getItem('compname')}</h2>

                    <hr/>
                    <div class="row">
                      <div class="col-md-4">
                        <div class="inner_cards_dash">
                          <div class="inner_card_dash_header" style={this.state.brandBackgroundGround}>
                            <h6>Email-id</h6>
                          </div>
                          <div class="inner_card_dash_body">
                            <input type="text" defaultValue={this.state.services.bemail}/>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="inner_cards_dash">
                          <div class="inner_card_dash_header" style={this.state.brandBackgroundGround}>
                            <h6>Phone no</h6>
                          </div>
                          <div class="inner_card_dash_body">
                            <input type="number" defaultValue={this.state.services.phn_no}/>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="inner_cards_dash">
                          <div class="inner_card_dash_header" style={this.state.brandBackgroundGround}>
                            <h6>Cin number</h6>
                          </div>
                          <div class="inner_card_dash_body">
                            <input type="number" defaultValue={this.state.cinno}/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-4">
                        <div class="inner_cards_dash">
                          <div class="inner_card_dash_header" style={this.state.brandBackgroundGround}>
                            <h6>Reg number</h6>
                          </div>
                          <div class="inner_card_dash_body">
                          <input type="number" defaultValue={this.state.regno}/>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="inner_cards_dash">
                          <div class="inner_card_dash_header" style={this.state.brandBackgroundGround}>
                            <h6>Address</h6>
                          </div>
                          <div class="inner_card_dash_body">
                            <input type="text" defaultValue={this.state.services.baddress}/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr/>
                    <div class="row">
                        <div class="col-md-4">
                          <div class="inner_cards_dash twitter">
                            <div class="inner_card_dash_header">
                              <h6>Twitter</h6>
                            </div>
                            <div class="inner_card_dash_body">
                            <input type="text" defaultValue=""/>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="inner_cards_dash youtube">
                            <div class="inner_card_dash_header">
                              <h6>Youtube</h6>
                            </div>
                            <div class="inner_card_dash_body">
                            <input type="text" defaultValue=""/>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-1"></div>
            </div>
        </div>

        )
    }
}
export default prodcat
