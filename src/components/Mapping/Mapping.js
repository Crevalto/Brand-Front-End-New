import React, { Component } from 'react';
import {Card,Button, Container,CardColumns} from 'react-bootstrap';
import ReactPlayer from 'react-player';
import './products.css'
export default class Mapping extends Component {
  render(){
    return (
      <div >
          <div>
            <ReactPlayer width='1013' height="480px" playing loop muted url="https://shotstack-api-stage-output.s3-ap-southeast-2.amazonaws.com/c0ru1ymfya/a3d0e1f9-4965-46c4-ac32-c966175c4777.mp4" />
            </div>
                  <CardColumns className="bg" style={{borderSpacing:'150px'}}>
                  <Card  className="carddesign" style={{width:'15rem'}}>
                      <Card.Img variant="top" src="/Images/Shirt.jpg" />
                      <Card.Body>
                        <Card.Title>Branded Shirts</Card.Title>
                        <Card.Text>
                          Branded shirts for Men slim-fit
                        </Card.Text>
                      </Card.Body>
                      
                      <Card.Footer>
                      
                        <small className="text-muted">In-stock</small>
                      </Card.Footer>
                    </Card>
                    <Card  className="carddesign" style={{width:'15rem'}}>
                      <Card.Img variant="top" src="/Images/Shirt.jpg" />
                      <Card.Body>
                        <Card.Title>Branded Shirts</Card.Title>
                        <Card.Text>
                          Branded shirts for Men slim-fit
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">In-stock</small>
                      </Card.Footer>
                    </Card>
                    <Card  className="carddesign" style={{width:'15rem'}}>
                      <Card.Img variant="top" src="/Images/Shirt.jpg" />
                      <Card.Body>
                        <Card.Title>Branded Shirts</Card.Title>
                        <Card.Text>
                          Branded shirts for Men slim-fit
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">In-stock</small>
                      </Card.Footer>
                    </Card>
                    <Card className="carddesign" style={{width:'15rem'}}>
                      <Card.Img variant="top" src="/Images/Shirt.jpg" />
                      <Card.Body>
                        <Card.Title>Branded Shirts</Card.Title>
                        <Card.Text>
                          Branded shirts for Men slim-fit
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">In-stock</small>
                      </Card.Footer>
                    </Card>
                    <Card  className="carddesign" style={{width:'15rem'}}>
                      <Card.Img variant="top" src="/Images/Shirt.jpg" />
                      <Card.Body>
                        <Card.Title>Branded Shirts</Card.Title>
                        <Card.Text>
                          Branded shirts for Men slim-fit
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">In-stock</small>
                      </Card.Footer>
                    </Card>
                    
                    <Card  className="carddesign" style={{width:'15rem'}}>
                      <Card.Img variant="top" src="/Images/Shirt.jpg" />
                      <Card.Body>
                        <Card.Title>Branded Shirts</Card.Title>
                        <Card.Text>
                          Branded shirts for Men slim-fit
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">In-stock</small>
                      </Card.Footer>
                    </Card>
                    <Card  className="carddesign" style={{width:'15rem'}}>
                      <Card.Img variant="top" src="/Images/Shirt.jpg" />
                      <Card.Body>
                        <Card.Title>Branded Shirts</Card.Title>
                        <Card.Text>
                          Branded shirts for Men slim-fit
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">In-stock</small>
                      </Card.Footer>
                    </Card>
                    <Card  className="carddesign" style={{width:'15rem'}}>
                      <Card.Img variant="top" src="/Images/Shirt.jpg" />
                      <Card.Body>
                        <Card.Title>Branded Shirts</Card.Title>
                        <Card.Text>
                          Branded shirts for Men slim-fit
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">In-stock</small>
                      </Card.Footer>
                    </Card>
                      
                    <Card  className="carddesign" style={{width:'15rem'}}>
                      <Card.Img variant="top" src="/Images/Shirt.jpg" />
                      <Card.Body>
                        <Card.Title>Branded Shirts</Card.Title>
                        <Card.Text>
                          Branded shirts for Men slim-fit
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">In-stock</small>
                      </Card.Footer>
                    </Card>
                   </CardColumns>
        </div>
    )
}
}


