import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
export default class chooseCategories extends Component {
  constructor() {
    super();
    this.onChooseCategory = this.onChooseCategory.bind(this);
  }

  onChooseCategory(e) {
    const param = e.target.dataset.param;
    console.log(param);
    this.props.changeCategory(param);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1 className="addProdTitle">Choose Category</h1>

        <Row>
          <Col md={4} className="categoryMen">
            <img
              onClick={this.onChooseCategory}
              src={require("../images/men.jpg")}
              alt="Men"
              data-param="Men"
              width="100%"
              height="450"
            />
            <div class="overlay">Men</div>
          </Col>
          <Col md={4} className="categoryKids">
            <img
              src={require("../images/kids.jpg")}
              alt="Kids"
              width="100%"
              height="450"
            />
            <div class="overlayKids">Kids</div>
          </Col>
          <Col md={4} className="categoryWomen">
            <img
              src={require("../images/women.jpg")}
              alt="Women"
              width="100%"
              height="450"
            />
            <div class="overlay">Women</div>
          </Col>
        </Row>
      </div>
    );
  }
}
