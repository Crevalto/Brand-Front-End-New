import React, { Component } from "react";
import Tie from "./SizePrice/shoes";
import { Modal } from "react-bootstrap";
export default class choosesizeadd extends Component {
  render() {
    return (
      <Modal.Body>
        {this.props.name === "belt" ? (
          <div>
            {" "}
            <Tie
              onsizeaddchange={this.sizeaddchange}
              onsizeaddback={this.sizeaddback}
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
