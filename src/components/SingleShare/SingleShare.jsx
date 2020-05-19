import React, { Component } from "react";
import "./SingleShare.css";
export class SingleShare extends Component {
  render() {
    return (
      <div className="single-share paddertop">
        <div className="video-placeholder"></div>
        <div>
          <form style={{ border: "1px solid black", padding: "30px" }}>
            <h2>Merchant Name</h2>
            <br></br>
            <i className="fa fa-map-marker" style={{ fontSize: "30px" }}>
              <span style={{ fontSize: "20px" }}>
                {" "}
                Factory Name and Location Details
              </span>
            </i>
            <br></br>
            <br></br>
            <i className="fa fa-users" style={{ fontSize: "30px" }}>
              {" "}
              <span style={{ fontSize: "20px" }}>
                {" "}
                564 Families Directly Impacted
              </span>
            </i>
            <br></br>
            <br></br>
            <h4>Share To Social Media</h4>
            <textarea style={{ width: "300px", height: "100px" }}></textarea>
            <br></br>
            <br></br>
            <i
              className="fa fa-linkedin-square"
              style={{ fontSize: "30px", marginLeft: "20px" }}
            ></i>
            <i
              className="fa fa-twitter"
              style={{ fontSize: "30px", marginLeft: "20px" }}
            ></i>
            <i
              className="fa fa-facebook-square"
              style={{ fontSize: "30px", marginLeft: "20px" }}
            ></i>
          </form>
        </div>
      </div>
    );
  }
}

export default SingleShare;
