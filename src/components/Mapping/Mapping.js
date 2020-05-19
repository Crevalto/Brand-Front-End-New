import React, { Component } from "react";
import { Card, CardColumns, Jumbotron } from "react-bootstrap";
import ReactPlayer from "react-player";
import "./products.css";
import banner from "../images/maping_banner.jpg";
import Shirt from "../images/shirt.jpeg";
export default class Mapping extends Component {
  render() {
    return (
      <div className="paddertop">
        <Jumbotron className="jumb">
          <h5 className="centh5">{localStorage.getItem("compname")}</h5>
        </Jumbotron>
        <Jumbotron>
          <CardColumns className="bg">
            <Card className="carddesign">
              <Card.Img variant="top" src={Shirt} />
              <Card.Body>
                <Card.Title>Branded Shirts</Card.Title>
                <Card.Text>Branded shirts for Men slim-fit</Card.Text>
              </Card.Body>

              <Card.Footer>
                <small className="text-muted">In-stock</small>
              </Card.Footer>
            </Card>

            <Card className="carddesign">
              <Card.Img variant="top" src={Shirt} />
              <Card.Body>
                <Card.Title>Branded Shirts</Card.Title>
                <Card.Text>Branded shirts for Men slim-fit</Card.Text>
              </Card.Body>

              <Card.Footer>
                <small className="text-muted">In-stock</small>
              </Card.Footer>
            </Card>
            <Card className="carddesign">
              <Card.Img variant="top" src={Shirt} />
              <Card.Body>
                <Card.Title>Branded Shirts</Card.Title>
                <Card.Text>Branded shirts for Men slim-fit</Card.Text>
              </Card.Body>

              <Card.Footer>
                <small className="text-muted">In-stock</small>
              </Card.Footer>
            </Card>
            <Card className="carddesign">
              <Card.Img variant="top" src={Shirt} />
              <Card.Body>
                <Card.Title>Branded Shirts</Card.Title>
                <Card.Text>Branded shirts for Men slim-fit</Card.Text>
              </Card.Body>

              <Card.Footer>
                <small className="text-muted">In-stock</small>
              </Card.Footer>
            </Card>
            <Card className="carddesign">
              <Card.Img variant="top" src={Shirt} />
              <Card.Body>
                <Card.Title>Branded Shirts</Card.Title>
                <Card.Text>Branded shirts for Men slim-fit</Card.Text>
              </Card.Body>

              <Card.Footer>
                <small className="text-muted">In-stock</small>
              </Card.Footer>
            </Card>
            <Card className="carddesign">
              <Card.Img variant="top" src={Shirt} />
              <Card.Body>
                <Card.Title>Branded Shirts</Card.Title>
                <Card.Text>Branded shirts for Men slim-fit</Card.Text>
              </Card.Body>

              <Card.Footer>
                <small className="text-muted">In-stock</small>
              </Card.Footer>
            </Card>
          </CardColumns>
        </Jumbotron>
      </div>
    );
  }
}
