import React from 'react';
import {Jumbotron,Row,Col} from 'react-bootstrap'
//import ReactPlayer from 'react-player'
import "./home.css"
import Prodcat from './prodcat.js'


function Home() {
  return (
    <div className="dback paddertop">
      <Jumbotron className="jum">
      <Row>
        <Col md={7}></Col>
        <Col md={5}>
          <div class="round">
            <h2 className="pquote">Let's show the love and kind towards the fashion industry</h2>
          </div>
        </Col>
        </Row>
      </Jumbotron>
      <div class="row">
        <div class="col-md-6">
          <div class="card-selection">
          <svg class="bi bi-geo" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 4a3 3 0 11-6 0 3 3 0 016 0z"/>
            <path d="M7.5 4h1v9a.5.5 0 01-1 0V4z"/>
            <path fill-rule="evenodd" d="M6.489 12.095a.5.5 0 01-.383.594c-.565.123-1.003.292-1.286.472-.302.192-.32.321-.32.339 0 .013.005.085.146.21.14.124.372.26.701.382.655.246 1.593.408 2.653.408s1.998-.162 2.653-.408c.329-.123.56-.258.701-.382.14-.125.146-.197.146-.21 0-.018-.018-.147-.32-.339-.283-.18-.721-.35-1.286-.472a.5.5 0 11.212-.977c.63.137 1.193.34 1.61.606.4.253.784.645.784 1.182 0 .402-.219.724-.483.958-.264.235-.618.423-1.013.57-.793.298-1.855.472-3.004.472s-2.21-.174-3.004-.471c-.395-.148-.749-.336-1.013-.571-.264-.234-.483-.556-.483-.958 0-.537.384-.929.783-1.182.418-.266.98-.47 1.611-.606a.5.5 0 01.595.383z" clip-rule="evenodd"/>
            </svg>
            <br/>
            <h4>Map view</h4>
            <br/>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum, orci sed consectetur rhoncus, ipsum lectus convallis lacus, eu mollis ante ante sed dui. Maecenas consectetur lectus non mauris suscipit, ac porta risus scelerisque. Praesent eu rhoncus massa. Vivamus eu dolor sit amet turpis malesuada eleifend.

            </p>
          </div>
        </div>
        <div class="col-md-6">
        <div class="card-selection">
        <svg class="bi bi-grid-1x2-fill" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1a1 1 0 011-1h5a1 1 0 011 1v14a1 1 0 01-1 1H1a1 1 0 01-1-1V1zm9 0a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1h-5a1 1 0 01-1-1V1zm0 9a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1h-5a1 1 0 01-1-1v-5z"/>
          </svg>
          <br/>
          <h4>Product view</h4>
          <br/>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum, orci sed consectetur rhoncus, ipsum lectus convallis lacus, eu mollis ante ante sed dui. Maecenas consectetur lectus non mauris suscipit, ac porta risus scelerisque. Praesent eu rhoncus massa. Vivamus eu dolor sit amet turpis malesuada eleifend.
          </p>
        </div>
        </div>
      </div>
      <div class="categories">
      <div class="row special_border">
        <div class="col-md-12">
          <h2>
          Categories
          </h2>
          <br/>
          <h6>Choose categories to look specify product</h6>
        </div>
      </div>
      <Prodcat/>
      </div>
    </div>
  );
}
export default Home;
