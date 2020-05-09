import React from 'react';
//import ReactPlayer from 'react-player'
import './product.css'
import image from '../images/white_bg_noname.jpg';


function Home() {
  return (
    <div className="products-body paddertop">
        <div class="row">
            <div class="col-md-4">
              <div class="card">
              <img src={image} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Product title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn">View more</a>
                </div>
              </div>
            </div>
        </div>

      <div class="modal fade" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Understood</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
