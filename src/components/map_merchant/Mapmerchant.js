import React,{Component} from 'react';
import Data from './fetch.json';
import ReactPlayer from 'react-player';
import {Card,Button} from 'react-bootstrap';
import './videos.css';
import Grid from '@material-ui/core/Grid';
import {withRouter} from 'react-router-dom'


class Mapmerchant extends Component{

constructor(){
  super()
  this.goto=this.goto.bind(this)
}
goto()
{
  this.props.history.push("/home");
}

  render(){
    return( 
      <div className="design">
        <Grid  container spacing={12} style={{padding:'30px'}}>
          {Data.map((detail,index)=>{
            return <div >
              <Grid item xl={3} style={{padding:'12px'}} >              
                <Card className="border" border="dark"   style={{width:'25rem'}}>
                  <Card.Body>
                    <ReactPlayer playing width="card.innerWidth" height="card.innerHeight" loop muted url={detail.videourl} />
                      <Card.Title>{detail["video details"]["video name"]}</Card.Title>
                        <Card.Text>
                          {detail["video details"]["location"]}
                            <h4>Number of workers:</h4>{detail["video details"]["workers"]}
                        </Card.Text>
                      <Button  onClick={this.goto} className="luck" variant="outline-dark">View the merchants products</Button>
                  </Card.Body>
                </Card> 
              </Grid>
        </div>
    }
    )}
      </Grid>
   </div>)
}
}
export default withRouter( Mapmerchant)