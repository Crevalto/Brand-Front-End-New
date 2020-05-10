import React from 'react';
import {Jumbotron,Row,Col} from 'react-bootstrap'
//import ReactPlayer from 'react-player'
import "./home.css"
import Prodcat from './prodcat.js'


function Home() {
  return (
    <div className="dback paddertop">
      <Jumbotron className="jum">
      <Row >
        <Col md={7}></Col>
        <Col md={5}>
          <div class="round">
            <h2 className="pquote">Let's show the love and kind towards the fashion industry</h2>
          </div>
        </Col>
        </Row>
      </Jumbotron>
      
      <div class="row">
        <div class="col-md-12">
          <h2>
          Categories
          </h2>
        </div>
      </div>
        <Prodcat/>
    </div>
  );
}
export default Home;
