import React from 'react';
import './video.css';
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom'

 export default function Landing() {
    return (
    <div className="body-landing  paddertop">
    <div style={{position:'fixed'}}>
     <ReactPlayer width={window.innerWidth} height="200"   playing loop url="https://shotstack-api-stage-output.s3-ap-southeast-2.amazonaws.com/c0ru1ymfya/a3d0e1f9-4965-46c4-ac32-c966175c4777.mp4" muted/>
     </div>
  <div class="row">
    <div class="card-home">
      <br/>
      <h1>EXTEND YOUR ARMS TO THE NEED</h1>
      <br/>
     <Link to="/map"> <button  type="button" class="btn btn-danger-home">Join the movement <span class="glyphicon glyphicon-forward" className="sp" aria-hidden="true"></span></button></Link>
    </div>
  </div>
    </div>
    )
}
