import React, { Component } from "react";
import { Card } from "react-bootstrap";

class catprod extends Component {
  state = {
    services: [],
  };

  componentDidMount() {
    fetch("https://crevaltobkend.herokuapp.com/brand/getproducts")
      .then((response) => response.json())
      .then((jsonData) => {
        this.setState({ services: jsonData });
        console.log(this.state.services);
      })
      .catch((error) => {
        // handle your errors here
        console.error(error);
      });
  }

  render() {
    return (
      <section className="services">
        <div className="services-center  paddertop">
          {this.state.services.map((product, index) => {
            return (
              <article key={index} className="service">
                <Card style={{ textAlign: "left" }}>
                  <Card.Img
                    width="10"
                    height="400"
                    variant="top"
                    src={product.categoryThumbnail}
                  />
                  <Card.Body>
                    <Card.Title>{product.categoryName}</Card.Title>
                  </Card.Body>
                </Card>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
export default catprod;
