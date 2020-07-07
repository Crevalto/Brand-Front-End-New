import React, { Component } from "react";
import "./KidsBabyChooseType.css";
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
        <div className="type-choose-baby">
          <div className="choose-type-baby">
            <img
              src={require("../../images/cat/baby/babygift.png")}
              alt="BabyGift"
              className="BabyGift"
              data-param="Baby-Gift-Box"
              onClick={this.onchangeType}
            />
            <img
              src={require("../../images/cat/baby/babysuit.png")}
              alt="BabySuit"
              className="BabySuit"
              data-param="Baby-Suit"
              onClick={this.onchangeType}
            />
            <img
              src={require("../../images/cat/baby/frockkids.png")}
              alt="FrockKids"
              className="FrockKids"
              data-param="Baby-Frock"
              onClick={this.onchangeType}
            />
            <img
              src={require("../../images/cat/baby/shoes.png")}
              alt="shoes"
              className="shoes"
              data-param="Baby-Shoes"
              onClick={this.onchangeType}
            />
            <img
              src={require("../../images/cat/baby/trouser.png")}
              alt="pants"
              className="pants"
              data-param="Baby-pants"
              onClick={this.onchangeType}
            />
            <img
              src={require("../../images/cat/baby/tshirt.png")}
              alt="tshirt"
              className="tshirt"
              data-param="Baby-tshirt"
              onClick={this.onchangeType}
            />
            <img
              src={require("../../images/cat/baby/trousers.png")}
              alt="trouser"
              className="trouser"
              data-param="Baby-trouser"
              onClick={this.onchangeType}
            />
          </div>
        </div>
      </div>
    );
  }
}
