import React, { Component } from 'react'
import Cart from './cart'
import {Col,Row,Card,Button} from 'react-bootstrap'
import './cart.css'

export default class cartdis extends Component {
    render() {
        return (
            <div className="paddertop">
            
            <Card style  = {{margin:'1rem'}}>
                     <table className  = "table">
                  
                    <Row style   = {{backgroundColor:'#6326809c',color:'white',margin:'1rem',padding:'1rem'}}>
                      <Col md = {2}></Col>
                      <Col md = {4}>Product</Col>
                      <Col>Price</Col>
                      <Col>Size</Col>
                      <Col>Quantity</Col>
                      <Col>Remove</Col>
                    </Row>
                  <tbody>
                    <Cart/>
                  </tbody>
                </table>
                </Card>
                <Row>
                  <Col md={6}></Col>
                  <Col md={5}>
                    <div  style={{backgroundColor:'#6326809c',padding:'1rem',color:'white',fontWeight:'2rem',textTransform:'capitalize' }} >Order summary </div>
                          <div className  = "p-4">
                            <ul className  = "list-unstyled mb-4">
                              <li className  = "d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Order Subtotal </strong><strong>₹78222</strong></li>
        <li className  = "d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Shipping and handling(10%)</strong><strong>₹4454</strong></li>
                              <li className  = "d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tax(15%)</strong><strong>₹45454</strong></li>
                              <li className  = "d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                                <h5 className  = "font-weight-bold">₹100</h5>
                              </li>
                            </ul><Button varient="primary"  block style={{backgroundColor:'#6326809c',borderRadius:'30px',border:'0px',padding:'10px'}} >Procceed to checkout</Button>
                          </div>
                      </Col>
                      <Col md={1}></Col>
                    </Row>    
              </div>

        )
    }
}
