import React, { Component } from "react";
//import {Card} from 'react-bootstrap'
//import {Link} from 'react-router-dom'
import logo from "../images/white_bg_noname.jpg";
import "./dashboard.css";
//import Dash from "./Dash.js";
import Dashprofile from "./Dashprofile";
import Dash from "./Dash";
class dashboard extends Component {
  constructor() {
    super();
    this.changestate = this.changestate.bind(this);
    this.state = {
      services: [],
      regno: "",
      cinno: "",
      brandBackgroundGround: "",
      dash: "profile",
      brandColor: "",
      initstate: false,
    };
  }
  componentDidMount() {
    const url =
      "https://crevaltobkend.herokuapp.com/brand/users/profile/" +
      localStorage.getItem("compname");
    var bearer = "Bearer" + localStorage.getItem("token");
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: bearer,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((jsonData) => {
        this.setState({ services: jsonData });
        console.log(this.state.services);
        this.setState({ cinno: this.state.services.bid.cinNo });
        this.setState({ regno: this.state.services.bid.regNo });
        this.setState({ regno: this.state.services.bid.regNo });
        this.setState({
          brandBackgroundGround: this.state.services.brandAssets.brandColor
            .bgColor,
        });
        this.setState({
          brandColor: this.state.services.brandAssets.brandColor.fgColor,
        });
      })
      .catch((error) => {
        // handle your errors here
        console.error(error);
      });
  }
  changestate(e) {
    var param = e.target.dataset.param;
    console.log(param);
    this.setState({ dash: param });
  }
  render() {
    return (
      <div class="row card-dash">
        <div
          class="col-md-2"
          style={{ background: this.state.brandBackgroundGround }}
        >
          <img src={logo} alt="Brand logo" />
          <ul>
            <li data-param="profile" onClick={this.changestate} disabled="true">
              Profile
            </li>
            <li data-param="chart" onClick={this.changestate} disabled>
              Chart
            </li>
            <li disabled>CSR</li>
            <li disabled>Link4</li>
          </ul>
        </div>

        <div class="col-md-9">
          <div id="hide">
            {this.state.dash === "profile" ? (
              <Dashprofile />
            ) : this.state.dash === "chart" ? (
              <Dash />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default dashboard;
