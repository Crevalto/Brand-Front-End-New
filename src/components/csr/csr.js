import React, { Component } from "react";
import "./csr.css";
export default class csr extends Component {
  constructor() {
    super();
    this.state = {
      video: [],
      on: false,
    };
  }

  handleImage = (e) => {
    this.state.video.push(URL.createObjectURL(e.target.files[0]));
    e.target.files = null;
  };
  onSubmit = (e) => {
    this.setState({ on: true });
  };
  render() {
    return (
      <div className="csr">
        <div className="csr__instructions">
          <h2 className="csr__instructions--title">Instructions</h2>
          <div className="csr__instructions--content">
            <dl>
              <dt>Step 1</dt>
              <dd>- Specify your Factory Name</dd>
              <dd>- Specify your product</dd>
              <dd>- No of Employees</dd>
              <dd>- Specify Where you export to</dd>
              <dt>Step 2</dt>
              <dd>- Description of the problem you are facing</dd>
              <dd>
                - How much pending inventory(inc. unsold/cancelled orders and
                exports)
              </dd>
              <dd>- Financial Debts</dd>
              <dt>Step 3</dt>
              <dd>- Thanking message</dd>
            </dl>
          </div>
        </div>
        <div className="csr__video">
          <h4 className="csr__instructions--title">Upload Your Video</h4>
          <input
            type="file"
            className="csr__video--input"
            onChange={this.handleImage}
          />
          <button className="btn btn-primary" onClick={this.onSubmit}>
            Submit
          </button>
        </div>

        <div className="csr__preview">
          {this.state.on === true
            ? this.state.video.map((url) => {
                return <iframe src={url} className="csr__preview--video" />;
              })
            : ""}
        </div>
      </div>
    );
  }
}
