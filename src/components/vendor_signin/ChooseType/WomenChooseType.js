import React, { Component } from "react";
import "./WomenChooseType.css";
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
        <div className="type-choose-women">
          <div className="choose-type-women">
            <img
              src={require("../../images/cat/kids-girls/topsntees.png")}
              alt="topsntees"
              className="topsntees"
              data-param="Women-topsntees"
              onClick={this.onchangeType}
            />
            <img
              src={require("../../images/cat/women/chudithar.png")}
              alt="chudithar"
              className="chudithar"
              data-param="Women-chudithar"
              onClick={this.onchangeType}
            />
            <img
              src={require("../../images/cat/women/pants.png")}
              alt="pants"
              className="pants"
              data-param="Women-pants"
              onClick={this.onchangeType}
            />
            <img
              src={require("../../images/cat/women/sarees.png")}
              alt="sarees"
              className="sarees"
              data-param="Women-sarees"
              onClick={this.onchangeType}
            />
            <img
              src={require("../../images/cat/women/slipper.png")}
              alt="slipper"
              className="slipper"
              data-param="Women-slipper"
              onClick={this.onchangeType}
            />
            <img
              src={require("../../images/cat/women/tshirt.png")}
              alt="tshirt"
              className="tshirt"
              data-param="Women-tshirt"
              onClick={this.onchangeType}
            />
          </div>
        </div>
      </div>
    );
  }
}
