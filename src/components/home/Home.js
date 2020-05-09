import React from 'react';
import {Jumbotron,CardDeck,Row,Col} from 'react-bootstrap'
//import ReactPlayer from 'react-player'
import "./home.css"
import Prodcat from './prodcat.js'


function Home() {
  return (
<<<<<<< HEAD
    <div className="dback paddertop" >
=======
    <div className="dback  paddertop">
>>>>>>> 9f8d415ec6e8dfac88f185541e049dfb9ecfd47e
      <Jumbotron className="jum">
      <Row >
        <Col md={5}>
        <h2 className="pquote">"There is no exercise better for the heart than reaching down and <br/>lifting people up"</h2>
        </Col>
        <Col md={7}></Col>
        </Row>
      </Jumbotron>
      <div class="row">
        <div class="col-md-4">

        </div>
        <div class="col-md-4">
          <h3>Product Categories</h3>
        </div>
      </div>
        <Prodcat/>
    </div>
  );
}
export default Home;
