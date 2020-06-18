import React, { Component } from "react";
import "./ChooseType.css";
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
      <div className="type-choose">
        <h1 className="addProdTitle" stlye={{ color: "white" }}>
          Choose Product Category
        </h1>
        <div className="choose-type">
          <img
            src={require("../images/cat/belt.png")}
            alt="belt"
            className="belt"
            data-param="belt"
            onClick={this.onchangeType}
          />
          <div className="overlay">Belt</div>
          <img
            src={require("../images/cat/pants.png")}
            alt="pants"
            className="pants"
            data-param="pants"
            onClick={this.onchangeType}
          />
          <img
            src={require("../images/cat/tshirt.png")}
            alt="tshirt"
            className="tshirt"
            data-param="tshirt"
            onClick={this.onchangeType}
          />
          <img
            src={require("../images/cat/shirt.png")}
            alt="shirt"
            className="shirt"
            data-param="shirt"
            onClick={this.onchangeType}
          />
          <img
            src={require("../images/cat/track.png")}
            alt="track"
            className="track"
            data-param="track"
            onClick={this.onchangeType}
          />
          <img
            src={require("../images/cat/tie.png")}
            alt="tie"
            className="tie"
            data-param="tie"
            onClick={this.onchangeType}
          />
          <img
            src={require("../images/cat/shoes.png")}
            alt="shoes"
            className="shoes"
            data-param="shoes"
            onClick={this.onchangeType}
          />
          <img
            src={require("../images/cat/coat.png")}
            alt="coat"
            className="coat"
            data-param="coat"
            onClick={this.onchangeType}
          />
          <img
            src={require("../images/cat/bow.png")}
            alt="bow"
            className="bow"
            data-param="bow"
            onClick={this.onchangeType}
          />
        </div>
      </div>
    );
  }
}
