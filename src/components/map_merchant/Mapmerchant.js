import React,{Component} from 'react';
import Data from './fetch.json';
import ReactPlayer from 'react-player';
import {Card,Button} from 'react-bootstrap';
import './videos.css';
import Grid from '@material-ui/core/Grid';
import {BsFillPeopleFill} from "react-icons/bs";
import {FaLocationArrow} from "react-icons/fa";
class Mapmerchant extends Component{
  render(){
    return(
      <div class="design paddertop">
        <div class="row" style={{padding:"20px"}}>
          {Data.map((detail,index)=>{
            return(
              <div class="col-md-4" style={{padding:'22px'}} >
                <div class="card border" border="dark">
                  <Card.Body>
                    <ReactPlayer playing width="card.innerWidth" height="card.innerHeight" loop muted url={detail.videourl} />
                      <Card.Title>{detail["video details"]["video name"]}</Card.Title>
                        <Card.Text>
                          <p><FaLocationArrow/>{detail["video details"]["location"]} <BsFillPeopleFill/>{detail["video details"]["workers"]}</p>
                        </Card.Text>
                      <Button  className="luck" variant="outline-dark">View the merchants products</Button>
                  </Card.Body>
                </div>
              </div>
              )
    }
    )}
      </div>
   </div>)
}
}
export default Mapmerchant
