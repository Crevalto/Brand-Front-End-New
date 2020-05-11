import React, { Component } from 'react'
import './payment.css'
export class payment extends Component {
    render() {
        return (
            <div class="payment-body paddertop">
                
                <div class="row justify-content-center">
          <div class="col-md-6">
            <span class="anchor" id="formPayment"></span>
            <nav className="payment-options">
                <a href="#" className="payment-options__item">Credit/Debit Card</a>
                <a href="#" className="payment-options__item">UPI</a>
                <a href="#" className="payment-options__item">Net Banking</a>
            </nav>
            <hr class="my-5"/>
            
            <div class="card card-outline-secondary">
              <div class="card-body">
                <h3 class="text-center">Credit Card Payment</h3>
                <hr/>
                <div class="alert alert-info">
                  <a class="close" data-dismiss="alert" href="#">×</a>CVC code is required.
                </div>
                <form autocomplete="off" class="form" role="form">
                  <div class="form-group">
                    <label for="cc_name">Card Holder's Name</label> 
										<input class="form-control" id="cc_name" pattern="\w+ \w+.*" required="required" title="First and last name" type="text"/>
                  </div>
                  <div class="form-group">
                    <label>Card Number</label> 
										<input autocomplete="off" class="form-control" maxlength="20" pattern="\d{16}" required="" title="Credit card number" type="text"/>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-12">Card Exp. Date</label>
                    <div class="col-md-4">
                      <select class="form-control" name="cc_exp_mo" size="0">
                        <option value="01">
                          01
                        </option>
                        <option value="02">
                          02
                        </option>
                        <option value="03">
                          03
                        </option>
                        <option value="04">
                          04
                        </option>
                        <option value="05">
                          05
                        </option>
                        <option value="06">
                          06
                        </option>
                        <option value="07">
                          07
                        </option>
                        <option value="08">
                          08
                        </option>
                        <option value="09">
                          09
                        </option>
                        <option value="10">
                          10
                        </option>
                        <option value="11">
                          11
                        </option>
                        <option value="12">
                          12
                        </option>
                      </select>
                    </div>
                    <div class="col-md-4">
                      <select class="form-control" name="cc_exp_yr" size="0">
                        <option>
                          2016
                        </option>
                        <option>
                          2017
                        </option>
                        <option>
                          2018
                        </option>
                        <option>
                          2019
                        </option>
                        <option>
                          2020
                        </option>
                        <option>
                          2021
                        </option>
                        <option>
                          2022
                        </option>
                        <option>
                          2023
                        </option>
                        <option>
                          2024
                        </option>
                        <option>
                          2025
                        </option>
                      </select>
                    </div>
                    <div class="col-md-4">
                      <input autocomplete="off" class="form-control" maxlength="3" pattern="\d{3}" placeholder="CVC" required="" title="Three digits on the back of your card" type="text"/>
                    </div>
                  </div>
                  <div class="row">
                    <label class="col-md-12">Amount</label>
                  </div>
                  <div class="form-inline">
                    <div class="input-group">
                      <div class="input-group-addon">
                        $
                      </div>
											<input class="form-control text-right" id="exampleInputAmount" placeholder="39" type="text"/>
                      <div class="input-group-addon">
                        .00
                      </div>
                    </div>
                  </div>
                  <hr/>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <button class="btn btn-default btn-lg btn-block" type="reset">Cancel</button>
                    </div>
                    <div class="col-md-6">
                      <button class="btn btn-success btn-lg btn-block" type="submit">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
            </div>
        )
    }
}

export default payment
