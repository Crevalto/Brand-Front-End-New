import React, { Component } from "react";
import "./KidsGirlsChooseType.css";
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

        <div className="type-choose-kidgirl">
          <div className="choose-type-kidgirl">
            <img
              src={require("../../images/cat/kids-girls/belt.png")}
              alt="Boys-belt"
              className="belt"
              data-param="Girls-belt"
              onClick={this.onchangeType}
            />

            <img
              src={require("../../images/cat/kids-girls/chudithar.png")}
              alt="chudithar"
              className="chudithar"
              data-param="Girls-chudithar"
              onClick={this.onchangeType}
            />
            <img
              src={require("../../images/cat/kids-girls/clippers.png")}
              alt="slippers"
              className="slippers"
              data-param="Girls-slippers"
              onClick={this.onchangeType}
            />
            <img
              src={require("../../images/cat/kids-girls/frock.png")}
              alt="frock"
              className="frock"
              data-param="Girls-frock"
              onClick={this.onchangeType}
            />
            <img
              src={require("../../images/cat/kids-girls/miditops.png")}
              alt="miditops"
              className="miditops"
              data-param="Girls-miditops"
              onClick={this.onchangeType}
            />
            <img
              src={require("../../images/cat/kids-girls/topsntees.png")}
              alt="topsntees"
              className="topsntees"
              data-param="Girls-topsntees"
              onClick={this.onchangeType}
            />
          </div>
        </div>
      </div>
    );
  }
}
