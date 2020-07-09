import React, { Component } from "react";
import ReactMapGL, {
  Marker,
  NavigationControl,
  FlyToInterpolator,
} from "react-map-gl";
import { MdLocationOn } from "react-icons/md";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { withRouter } from "react-router-dom";
class Map extends Component {
  constructor() {
    super();
    this.onViewportChange = this.onViewportChange.bind(this);
    this.changemap = this.changemap.bind(this);
    this.changelocation = this.changelocation.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.gotomap = this.gotomap.bind(this);
    this.state = {
      locations: [],
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight - 85,
        latitude: 10.790483,
        longitude: 78.704674,
        zoom: 0,
      },
      name: "",
      id: "",
      mapstyle: "mapbox://styles/vicky-2000/cka6g893l0jat1in5et9o9hsc",
      place: "",
    };
  }

  gotomap() {
    console.log("hello");
    console.log(this.state.name);
    this.props.history.push(
      `/mapping/${this.state.name + "_" + this.state.id}`
    );
  }

  componentDidMount() {
    const url = "https://crevaltoserver.herokuapp.com/v1/brand/getlocations";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData);
        this.setState({ locations: jsonData });
      })
      .then((run) => {
        console.log("hello");
        console.log(this.state.locations);
        this.setState({
          viewport: {
            ...this.state.viewport,
            width: window.innerWidth,
            height: window.innerHeight - 85,
            latitude: 23.593394,
            longitude: 77.588464,
            zoom: 4,
            transitionDuration: 3000,
            transitionInterpolator: new FlyToInterpolator(),
          },
        });
        console.log(this.state.locations);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // componentDidUpdate() {
  //   this.setState({
  //     viewport: {
  //       ...this.state.viewport,
  //       width: window.innerWidth,
  //       height: window.innerHeight - 85,
  //     },
  //   });
  // }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onViewportChange = (viewport) => {
    this.setState({ viewport });
  };

  changemap(e) {
    const { param } = e.target.dataset;

    this.setState({ mapstyle: param });
  }

  changelocation() {
    var flag = 0;
    for (var i = 0; i < this.state.locations.length; i++) {
      if (
        this.state.place.toUpperCase() ===
        this.state.locations[i].companyName.toUpperCase()
      ) {
        const viewport = {
          ...this.state.viewport,
          longitude: parseFloat(
            this.state.locations[i].addressCoordinates.longitude
          ),
          latitude: parseFloat(
            this.state.locations[i].addressCoordinates.latitude
          ),
          zoom: 14,
          transitionDuration: 5000,
          transitionInterpolator: new FlyToInterpolator(),
        };

        this.setState({ viewport: viewport });
        flag = 1;
        break;
      }
    }
    if (flag === 0) {
      alert(`${this.state.place.toUpperCase()} is not FOUND`);
    }
    this.setState({ place: "" });
  }

  render() {
    console.log(this.state);

    console.log(this.state.locations);
    return (
      <div className="paddertop" style={{ overflow: "hidden" }}>
        <ReactMapGL
          attributionControl={true}
          customAttribution={true}
          {...this.state.viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle={this.state.mapstyle}
          onViewportChange={this.onViewportChange}
        >
          {this.state.locations.map((loc, index) => (
            <Marker
              latitude={parseFloat(loc.addressCoordinates.latitude)}
              longitude={parseFloat(loc.addressCoordinates.longitude)}
            >
              <OverlayTrigger
                key="top"
                placement="top"
                overlay={<Tooltip id="tooltip-top">{loc.companyName}</Tooltip>}
              >
                <MdLocationOn
                  size="40"
                  onClick={() => {
                    this.setState(
                      { name: loc.companyName, id: loc._id },
                      () => {
                        this.gotomap();
                      }
                    );
                  }}
                  color="purple"
                />
              </OverlayTrigger>
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
            src={require("../images/normalview.png")}
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
            src={require("../images/satiliteview.png")}
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
            src={require("../images/darkmap.png")}
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
        </OverlayTrigger>
        <input
          style={{
            position: "absolute",
            width: "250px",
            left: 20,
            top: 265,
          }}
          type="text"
          name="place"
          placeholder="Merchant Name"
          class="form-control"
          onChange={this.handleChange}
          value={this.state.place}
        ></input>
        <button
          class="btn btn-primary"
          style={{ position: "absolute", left: 20, top: 310 }}
          onClick={this.changelocation}
        >
          Search
        </button>
      </div>
    );
  }
}
export default withRouter(Map);
