import React, { Component } from 'react';
//import ReactPlayer from 'react-player'
import './product.css'
//import image from '../images/white_bg_noname.jpg';
import Productdisp from '../productsdisp/productsdisp'

class Home extends Component {
render(){
  return (
    <div className="products-body paddertop">
        
            
              <Productdisp pid={this.props.match.params.slug} />
            
        
     
    </div>
  );
}
}
export default Home;
