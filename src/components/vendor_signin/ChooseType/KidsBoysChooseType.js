import React, { Component } from "react";
import "./KidsBoysChooseType.css";
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

        <div className="type-choose-kidboy">
          <div className="choose-type-kidboy">
            <img
              src={require("../../images/cat/kids-boys/boyscoat.png")}
              alt="Boys-Coat"
              className="Boys-Coat"
              data-param="Boys-Coat"
              onClick={this.onchangeType}
            />

            <img
              src={require("../../images/cat/kids-boys/dothis.png")}
              alt="Dotheees"
              className="dotheees"
              data-param="Boys-Dotheees"
              onClick={this.onchangeType}
            />
            <img
              src={require("../../images/cat/kids-boys/kidshirt.png")}
              alt="kidshirt"
              className="kidshirt"
              data-param="Boys-shirt"
              onClick={this.onchangeType}
            />
            <img
              src={require("../../images/cat/kids-boys/kidsshoes.png")}
              alt="kidsshoes"
              className="kidsshoes"
              data-param="Boys-shoes"
              onClick={this.onchangeType}
            />
            <img
              src={require("../../images/cat/kids-boys/pants.png")}
              alt="pants"
              className="pants"
              data-param="Boys-pants"
              onClick={this.onchangeType}
            />
            <img
              src={require("../../images/cat/kids-boys/track.png")}
              alt="track"
              className="track"
              data-param="Boys-track"
              onClick={this.onchangeType}
            />
            <img
              src={require("../../images/cat/kids-boys/tshirt.png")}
              alt="tshirt"
              className="tshirt"
              data-param="Boys-tshirt"
              onClick={this.onchangeType}
            />
          </div>
        </div>
      </div>
    );
  }
}
