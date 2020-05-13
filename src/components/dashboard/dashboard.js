import React, { Component } from 'react'
//import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import logo from '../images/white_bg_noname.jpg'
import './dashboard.css'
 class prodcat extends Component {
    render() {
        return (
        <div class="dashboard-body paddertop">
          <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10">
              <div class="row card-dash">
                  <div class="col-md-2">
                    <img src={logo} alt="Brand logo"/>
                    <ul>
                      <li class="active">Link1</li>
                      <li>Link2</li>
                      <li>Link3</li>
                      <li>Link4</li>
                    </ul>
                  </div>
                  <div class="col-md-9">
                    <h2>Google</h2>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus nisi in commodo gravida.</h4>
                    <hr/>
                    <div class="row">
                      <div class="col-md-7">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="inner_cards_dash">
                              <div class="inner_card_dash_header">
                                <h6>Email-id</h6>
                              </div>
                              <div class="inner_card_dash_body">
                                <h5>appsby12@gmail.com</h5>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="inner_cards_dash">
                              <div class="inner_card_dash_header">
                                <h6>Phone no</h6>
                              </div>
                              <div class="inner_card_dash_body">
                                <h5>9842665371</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="inner_cards_dash">
                              <div class="inner_card_dash_header">
                                <h6>Email-id</h6>
                              </div>
                              <div class="inner_card_dash_body">
                                <h5>appsby12@gmail.com</h5>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="inner_cards_dash">
                              <div class="inner_card_dash_header">
                                <h6>Phone no</h6>
                              </div>
                              <div class="inner_card_dash_body">
                                <h5>9842665371</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-5">
                        <div class="social_cards_dash twitter">
                          <a>/sudarsansudar</a>
                        </div>
                        <div class="social_cards_dash youtube">
                          <a>/sudarsansudar</a>
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
