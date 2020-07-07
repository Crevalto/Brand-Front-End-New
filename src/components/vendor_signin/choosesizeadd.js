import React, { Component } from "react";
import Tie from "./SizePrice/shoes";
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
        {this.props.name === "Men-belt" ? (
          <div>
            <Tie
              onchoosesizeaddchange={this.onsizeaddchangetemp}
              onchoosesizeaddback={this.onsizeaddbacktemp}
            />
            sdfghjgffghj
          </div>
        ) : (
          <div></div>
        )}
      </Modal.Body>
    );
  }
}
