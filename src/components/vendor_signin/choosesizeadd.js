import React, { Component } from "react";
import Babycommon from "./SizePrice/babycommon";
import Babygiftbox from "./SizePrice/babygiftbox";
import Babypant from "./SizePrice/babypant";
import Babyshirt from "./SizePrice/babyshirts";
import Babyshoes from "./SizePrice/babyshoes";
import Babytopbot from "./SizePrice/babytopbot";
import Dothis from "./SizePrice/dothis";
import Kidboth from "./SizePrice/shirt";
import Kidcom from "./SizePrice/kidcom";
import Kidspant from "./SizePrice/kidspant";
import Kidsshirt from "./SizePrice/kidsshirt";
import Pant from "./SizePrice/pant";
import Saree from "./SizePrice/saree";
import Shirt from "./SizePrice/shirt";
import Shoes from "./SizePrice/shoes";
import Sizeadd from "./SizePrice/Sizeadd";
import Tie from "./SizePrice/tie";

import { Modal } from "react-bootstrap";

export default class choosesizeadd extends Component {
  constructor() {
    super();
    this.onsizeaddchangetemp = this.onsizeaddchangetemp.bind(this);
    this.onsizeaddbacktemp = this.onsizeaddbacktemp.bind(this);
  }

  onsizeaddchangetemp(param) {
    this.props.onsizeaddchange(param);
  }
  onsizeaddbacktemp() {
    this.props.onsizeaddback();
  }

  render() {
    return (
      <Modal.Body>
        {this.props.name === "Men-tshirt" ||
        this.props.name === "Women-tshirt" ||
        this.props.name === "Men-shirt" ? (
          <div>
            <Shirt
              onchoosesizeaddchange={this.onsizeaddchangetemp}
              onchoosesizeaddback={this.onsizeaddbacktemp}
            />
          </div>
        ) : this.props.name === "Boys-shirt" ||
          this.props.name === "Boys-tshirt" ? (
          <div>
            <Kidsshirt
              onchoosesizeaddchange={this.onsizeaddchangetemp}
              onchoosesizeaddback={this.onsizeaddbacktemp}
            />
          </div>
        ) : this.props.name === "Men-track" ||
          this.props.name === "Men-pants" ||
          this.props.name === "Women-pants" ? (
          <div>
            <Pant
              onchoosesizeaddchange={this.onsizeaddchangetemp}
              onchoosesizeaddback={this.onsizeaddbacktemp}
            />
          </div>
        ) : this.props.name === "Men-tie" ||
          this.props.name === "Boys-tie" ||
          this.props.name === "Girls-belt" ||
          this.props.name === "Boy-belt" ? (
          <div>
            <Tie
              onchoosesizeaddchange={this.onsizeaddchangetemp}
              onchoosesizeaddback={this.onsizeaddbacktemp}
            />
          </div>
        ) : this.props.name === "Men-shoes" ||
          this.props.name === "Boys-shoes" ||
          this.props.name === "Girls-slippers" ||
          this.props.name === "Women-slipper" ? (
          <div>
            <Shoes
              onchoosesizeaddchange={this.onsizeaddchangetemp}
              onchoosesizeaddback={this.onsizeaddbacktemp}
            />
          </div>
        ) : this.props.name === "Girls-frock" ||
          this.props.name === "Girls-chudithar" ||
          this.props.name === "Girls-miditops" ||
          this.props.name === "Girls-topsntees" ? (
          <div>
            <Kidcom
              onchoosesizeaddchange={this.onsizeaddchangetemp}
              onchoosesizeaddback={this.onsizeaddbacktemp}
            />
          </div>
        ) : this.props.name === "Women-chudithar" ||
          this.props.name === "Women-topsntees" ? (
          <div>
            <Sizeadd
              onchoosesizeaddchange={this.onsizeaddchangetemp}
              onchoosesizeaddback={this.onsizeaddbacktemp}
            />
          </div>
        ) : this.props.name === "Girls-sarees" ||
          this.props.name === "Women-sarees" ? (
          <div>
            <Saree
              onchoosesizeaddchange={this.onsizeaddchangetemp}
              onchoosesizeaddback={this.onsizeaddbacktemp}
            />
          </div>
        ) : this.props.name === "Baby-Gift-Box" ? (
          <div>
            <Babygiftbox
              onchoosesizeaddchange={this.onsizeaddchangetemp}
              onchoosesizeaddback={this.onsizeaddbacktemp}
            />
          </div>
        ) : this.props.name === "Boys-Coat" ? (
          <div>
            <Babytopbot
              onchoosesizeaddchange={this.onsizeaddchangetemp}
              onchoosesizeaddback={this.onsizeaddbacktemp}
            />
          </div>
        ) : this.props.name === "Baby-Suit" ? (
          <div>
            <Babycommon
              onchoosesizeaddchange={this.onsizeaddchangetemp}
              onchoosesizeaddback={this.onsizeaddbacktemp}
            />
          </div>
        ) : this.props.name === "Baby-Frock" ? (
          <div>
            <Babycommon
              onchoosesizeaddchange={this.onsizeaddchangetemp}
              onchoosesizeaddback={this.onsizeaddbacktemp}
            />
          </div>
        ) : this.props.name === "Baby-Shoes" ? (
          <div>
            <Babyshoes
              onchoosesizeaddchange={this.onsizeaddchangetemp}
              onchoosesizeaddback={this.onsizeaddbacktemp}
            />
          </div>
        ) : this.props.name === "Baby-pants" ||
          this.props.name === "Baby-trouser" ? (
          <div>
            <Babypant
              onchoosesizeaddchange={this.onsizeaddchangetemp}
              onchoosesizeaddback={this.onsizeaddbacktemp}
            />
          </div>
        ) : this.props.name === "Baby-tshirt" ? (
          <div>
            <Babyshirt
              onchoosesizeaddchange={this.onsizeaddchangetemp}
              onchoosesizeaddback={this.onsizeaddbacktemp}
            />
          </div>
        ) : this.props.name === "Boys-pants" ||
          this.props.name === "Boys-track " ||
          this.props.name === "Girls-pants" ? (
          <div>
            <Kidspant
              onchoosesizeaddchange={this.onsizeaddchangetemp}
              onchoosesizeaddback={this.onsizeaddbacktemp}
            />
          </div>
        ) : this.props.name === "Boys-Dotheees" ? (
          <div>
            <Dothis
              onchoosesizeaddchange={this.onsizeaddchangetemp}
              onchoosesizeaddback={this.onsizeaddbacktemp}
            />
          </div>
        ) : this.props.name === "Boys-Coat" ? (
          <div>
            <Kidboth
              onchoosesizeaddchange={this.onsizeaddchangetemp}
              onchoosesizeaddback={this.onsizeaddbacktemp}
            />
          </div>
        ) : (
          ""
        )}
      </Modal.Body>
    );
  }
}
