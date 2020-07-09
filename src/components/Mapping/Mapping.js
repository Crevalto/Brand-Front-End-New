import React, { Component } from "react";
import { Card, CardColumns, Jumbotron } from "react-bootstrap";
import "./products.css";
import Shirt from "../images/shirt.jpeg";
export default class Mapping extends Component {
  constructor() {
    super();
    this.state = {
      company: "",
    };
  }

  componentDidMount() {
    var dts = this.props.match.params.slug;
    var val = dts.split("_");
    this.setState({ company: val[0], id: val[1] }, () => {
      console.log(this.state);
    });
  }
  render() {
    return (
      <div className="paddertop">
        <Jumbotron className="jumb">
          <h5 className="centh5">{this.state.company}</h5>
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
