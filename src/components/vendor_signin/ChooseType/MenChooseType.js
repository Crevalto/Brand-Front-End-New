import React, { Component } from "react";
import "./MenChooseType.css";
export default class ChooseType extends Component {
  constructor() {
    super();
    this.onchangeType = this.onchangeType.bind(this);
  }
  onchangeType(e) {
    const param = e.target.dataset.param;
    this.props.onchangeType(param);
  }

  render() {
    return (
      <div>
        <h1 className="addProdTitle" stlye={{ color: "white" }}>
          Choose Product Category
        </h1>
        <div className="type-choose-men">
          <div className="choose-type-men">
            <img
              src={require("../../images/cat/belt.png")}
              alt="belt"
              className="belt"
              data-param="Men-belt"
              onClick={this.onchangeType}
            />
            <img
              src={require("../../images/cat/pants.png")}
              alt="pants"
              className="pants"
              data-param="Men-pants"
              onClick={this.onchangeType}
            />
            <img
              src={require("../../images/cat/tshirt.png")}
              alt="tshirt"
              className="tshirt"
              data-param="Men-tshirt"
              onClick={this.onchangeType}
            />
            <img
              src={require("../../images/cat/shirt.png")}
              alt="shirt"
              className="shirt"
              data-param="Men-shirt"
              onClick={this.onchangeType}
            />
            <img
              src={require("../../images/cat/track.png")}
              alt="track"
              className="track"
              data-param="Men-track"
              onClick={this.onchangeType}
            />
            <img
              src={require("../../images/cat/tie.png")}
              alt="tie"
              className="tie"
              data-param="Men-tie"
              onClick={this.onchangeType}
            />
            <img
              src={require("../../images/cat/shoes.png")}
              alt="shoes"
              className="shoes"
              data-param="Men-shoes"
              onClick={this.onchangeType}
            />
            <img
              src={require("../../images/cat/coat.png")}
              alt="coat"
              className="coat"
              data-param="Men-coat"
              onClick={this.onchangeType}
            />
            <img
              src={require("../../images/cat/bow.png")}
              alt="bow"
              className="bow"
              data-param="Men-bow"
              onClick={this.onchangeType}
            />
          </div>
        </div>
      </div>
    );
  }
}
