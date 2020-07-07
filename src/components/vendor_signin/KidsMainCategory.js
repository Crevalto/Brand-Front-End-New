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
              src={require("../images/cat/category-kids/boy.jpg")}
              alt="Boys"
              data-param="Boys"
              width="100%"
              height="450"
            />
            <div class="overlay">Boys</div>
          </Col>
          <Col md={4} className="categoryKids">
            <img
              onClick={this.onChooseCategory}
              src={require("../images/cat/category-kids/baby.jpg")}
              data-param="Babies"
              alt="Babies"
              width="100%"
              height="450"
            />
            <div class="overlayKids">Babies</div>
          </Col>
          <Col md={4} className="categoryWomen">
            <img
              onClick={this.onChooseCategory}
              src={require("../images/cat/category-kids/girl.jpg")}
              alt="Girls"
              width="100%"
              data-param="Girls"
              height="450"
            />
            <div class="overlay">Girls</div>
          </Col>
        </Row>
      </div>
    );
  }
}
