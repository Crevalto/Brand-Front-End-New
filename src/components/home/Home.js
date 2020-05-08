import React from 'react';
import {Jumbotron,CardDeck,Row,Col} from 'react-bootstrap'
//import ReactPlayer from 'react-player'
import "./home.css"
import Prodcat from './prodcat.js'


function Home() {
  return (
    <div className="dback">
      <Jumbotron className="jum">
      <Row >
        <Col md={5}>
        <h2 className="pquote">"There is no exercise better for the heart than reaching down and <br/>lifting people up"</h2>
        </Col>
        <Col md={7}></Col>
        </Row>
      </Jumbotron>


      <h3 className="prod">Product Categories</h3>
      <Row >
        <Col className="colsty" md={1}></Col>
        <Col md={10}>
        <CardDeck style={{color:'black',marginBottom:'50px',textAlign:'left'}}>
          <Prodcat/>
        </CardDeck>
        </Col>
        <Col md={1}></Col>
      </Row>
        </div>
  );
}
export default Home;
