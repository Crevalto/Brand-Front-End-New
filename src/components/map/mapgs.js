import React, { Component } from "react";
import Dat from "./data.json";
import ReactMapGL, {
  Marker,
  NavigationControl,
  FlyToInterpolator,
} from "react-map-gl";
import { MdLocationOn } from "react-icons/md";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import img1 from "../images/normalview.png";
import img2 from "../images/satiliteview.png";
import img3 from "../images/darkmap.png";
//import d3 from 'd3-ease';
import { withRouter } from "react-router-dom";
class Map extends Component {
  constructor() {
    super();
    this.onViewportChange = this.onViewportChange.bind(this);
    this.changemap = this.changemap.bind(this);
    this.renderTooltip = this.renderTooltip.bind(this);
    this.changelocation = this.changelocation.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.gotomap = this.gotomap.bind(this);
    this.state = {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight - 85,
        latitude: 10.790483,
        longitude: 78.704674,
        zoom: 0,
      },
      mapstyle: "mapbox://styles/vicky-2000/cka6g893l0jat1in5et9o9hsc",
      place: "",
    };
  }

  gotomap() {
    console.log("hello");
    this.props.history.push("/mapping");
  }

  componentDidMount() {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight - 85,
        latitude: 10.790483,
        longitude: 78.704674,
        zoom: 12,
        transitionDuration: 5000,
        transitionInterpolator: new FlyToInterpolator(),
      },
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: [e.target.value] });
  }

  onViewportChange = (viewport) => {
    this.setState({ viewport });
  };

  changemap(e) {
    const { param } = e.target.dataset;

    this.setState({ mapstyle: param });
  }

  renderTooltip() {
    return <Tooltip id="button-tooltip">Simple tooltip</Tooltip>;
  }

  changelocation() {
    console.log(this.state.place);
    const viewport = {
      ...this.state.viewport,
      longitude: -74.1,
      latitude: 40.7,
      zoom: 14,
      transitionDuration: 5000,
      transitionInterpolator: new FlyToInterpolator(),
    };
    this.setState({ viewport: viewport });
  }

  render() {
    return (
      <div className="paddertop" style={{ overflow: "hidden" }}>
        <ReactMapGL
          attributionControl={true}
          customAttribution={true}
          {...this.state.viewport}
          mapboxApiAccessToken="pk.eyJ1Ijoidmlja3ktMjAwMCIsImEiOiJja2E2Y3k0cnIwNzFrMnltdWZwaWczd3hwIn0.218X0nbylfqIwrddVsYPWA"
          mapStyle={this.state.mapstyle}
          onViewportChange={this.onViewportChange}
        >
          {Dat.map((loc, index) => (
            <Marker latitude={loc.lat} longitude={loc.lng}>
              <MdLocationOn
                size="40"
                onClick={this.gotomap}
                color={loc.color}
              />
            </Marker>
          ))}

          <div style={{ position: "absolute", right: 20, bottom: 20 }}>
            <NavigationControl onViewportChange={this.onViewportChange} />
          </div>
        </ReactMapGL>
        <OverlayTrigger
          key="right"
          placement="right"
          overlay={<Tooltip id="tooltip-right">Normal Map</Tooltip>}
        >
          <img
            src={img1}
            alt="view"
            style={{
              position: "absolute",
              width: "40px",
              height: "40px",
              borderRadius: "2px",
              border: "1px solid white",
              left: 20,
              top: 105,
              cursor: "pointer",
            }}
            data-param="mapbox://styles/vicky-2000/cka6uyllz0xos1jo20816u56l"
            onClick={this.changemap}
          />
        </OverlayTrigger>
        <OverlayTrigger
          key="right"
          placement="right"
          overlay={<Tooltip id="tooltip-right">Satilite Map</Tooltip>}
        >
          <img
            src={img2}
            alt="view"
            style={{
              position: "absolute",
              width: "40px",
              height: "40px",
              borderRadius: "2px",
              border: "1px solid white",
              left: 20,
              top: 155,
              cursor: "pointer",
            }}
            data-param="mapbox://styles/vicky-2000/cka6g893l0jat1in5et9o9hsc"
            onClick={this.changemap}
          />
        </OverlayTrigger>{" "}
        <OverlayTrigger
          key="right"
          placement="right"
          overlay={<Tooltip id="tooltip-right">Dark Map</Tooltip>}
        >
          <img
            src={img3}
            alt="view"
            style={{
              position: "absolute",
              cursor: "pointer",
              width: "40px",
              height: "40px",
              borderRadius: "2px",
              border: "1px solid white",
              left: 20,
              top: 205,
            }}
            data-param="mapbox://styles/vicky-2000/cka6gjuej0jl11irp3c6ps7fl"
            onClick={this.changemap}
          />
        </OverlayTrigger>{" "}
        <input
          style={{ position: "absolute", left: 20, top: 255 }}
          type="text"
          name="place"
          onChange={this.handleChange}
          value={this.state.place}
        ></input>
        <button
          style={{ position: "absolute", left: 20, top: 285 }}
          onClick={this.changelocation}
        >
          {" "}
          clickme
        </button>
      </div>
    );
  }
}
export default withRouter(Map);
