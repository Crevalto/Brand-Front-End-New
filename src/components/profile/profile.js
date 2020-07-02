import React, { Component } from "react";
import DropBox from "../vendor_signin/Dropbox";
import { Jumbotron, Card, Form, Col } from "react-bootstrap";
import "./profile.css";
import { MdAddAPhoto } from "react-icons/md";
import { TiUserAdd } from "react-icons/ti";
import eBut from "../images/edit-button.png";
import Axios from 'axios';

class Profile extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDataChange = this.handleDataChange.bind(this);
    this.state = {
      companyName: "",
      branchName: "Google",
      address: "1234 Main St",
      phoneNumber: "123-456-789",
      taxIdentificationNumber: "XXX-XX-XXXX",
      country: "India",
      state: "Tamil Nadu",
      city: "Trichy",
      pincode: "620012",
      email: "someone@some.com",
    };
  }
  async componentDidMount() {
    const url = "/users/me";
    const method = "GET";
    Axios.request({
      baseURL: "http://localhost:8000",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.props.token,
      },
      url,
      method,
    })
      .then((res) => {
        console.log(res.data);

        this.setState({ ...res.data });
      })
      .catch((err) => {
        alert("loading failed");
      });
  }
  handleClick = () => {
    document.getElementById("editButton").style.display = "block";
    document.getElementById("formElement").disabled = false;
  };
  handleChange = (e) => {
    document.getElementById("editButton").style.display = "none";
    document.getElementById("formElement").disabled = true;
    e.preventDefault();
    const url = "/users/me";
    const method = "PATCH";
    Axios.request({
      baseURL: "http://localhost:8000",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.props.token,
      },
      url,
      method,
    })
      .then(() => {
        alert("sucessfully Updated");
      })
      .catch(() => {
        alert("loading failed");
      });
  };
  handleDataChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const thumbsContainer_cover = {
      display: "flex",
      border: "3px solid white",
      width: "100%",
      borderRadius: "10px",
      height: "400px",
      flexDirection: "row",
      flexWrap: "wrap",
    };

    const thumbsContainer_profile = {
      top: " 385px",
      left: "41%",
      position: "absolute",
      display: "flex",
      border: "3px solid  white",
      width: "250px",
      height: "250px",
      background: "violet",
      borderRadius: "100%",
      flexDirection: "row",
      flexWrap: "wrap",
    };

    const thumb_cover = {
      display: "inline-flex",
      borderRadius: 2,
      marginBottom: 8,
      marginRight: 8,
      width: "100%",
      height: "100% ",
      padding: 4,
      boxSizing: "border-box",
      justifyContent: "center",
    };

    const thumb_profile = {
      display: "inline-flex",
      borderRadius: " 100%",
      width: "100%",
      height: "100%",
      padding: 4,
      boxSizing: "border-box",
      justifyContent: "center",
    };

    const img_cover = {
      display: "block",
      width: "auto",
      height: "100%",
    };

    const img_profile = {
      display: "block",
      width: "100%",
      borderRadius: "100%",
      height: "100%",
    };
    return (
      <div className="backgroundSign">
        <div className="sign">
          <Jumbotron className="cover">
            <DropBox
              imgname="cover"
              thumb={thumb_cover}
              thumbsContainer={thumbsContainer_cover}
              img={img_cover}
              message={
                <h2
                  style={{
                    color: "white",
                    width: "100%",
                    textAlign: "center",
                    alignSelf: "center",
                    cursor: "pointer",
                  }}
                >
                  <MdAddAPhoto />
                  <br />
                  Add Cover Photo
                </h2>
              }
            />
          </Jumbotron>
          <DropBox
            imgname="profile"
            thumb={thumb_profile}
            thumbsContainer={thumbsContainer_profile}
            img={img_profile}
            message={
              <h4
                style={{
                  color: "white",
                  width: "100%",
                  textAlign: "center",
                  alignSelf: "center",
                  cursor: "pointer",
                }}
              >
                <TiUserAdd size={30} />
                <br />
                Add Profile Photo
              </h4>
            }
          />
          <br />
          <br />
          <div className="details">
            <h2>
              <b>Welcome {this.state.branchName}!</b>
            </h2>
            <h5 style={{ color: "blue", padding: "5px" }}>
              {this.state.email}
            </h5>
          </div>
        </div>

        <div>
          <div className="detailsCard mx-auto">
            <Card
              style={{
                width: "60%",
                marginLeft: "20%",
                border: "0px",
                borderRadius: "10px",
              }}
            >
              <Card.Body>
                <Form>
                  <fieldset id="formElement" disabled="disabled">
                    <Form.Group controlId="formGroupBranchName">
                      <Form.Label>Branch Name</Form.Label>
                      <img
                        style={{ marginLeft: "84.5%" }}
                        src={eBut}
                        onClick={this.handleClick}
                      />
                      <Form.Control
                        type="text"
                        value={this.state.branchName}
                        onChange={this.handleDataChange}
                        name="branchName"
                      />
                    </Form.Group>

                    <Form.Group controlId="formGroupPhone">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="phone"
                        value={this.state.phoneNumber}
                        onChange={this.handleDataChange}
                        name="phoneNumber"
                      />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        value={this.state.address}
                        onChange={this.handleDataChange}
                        name="address"
                      />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                      <Form.Label>Tax Identification Number</Form.Label>
                      <Form.Control
                        value={this.state.taxIdentificationNumber}
                        onChange={this.handleDataChange}
                        name="taxIdentificationNumber"
                      />
                    </Form.Group>

                    <Form.Group controlId="formGroupCountry">
                      <Form.Label>Country</Form.Label>
                      <Form.Control
                        type="text"
                        value={this.state.country}
                        onChange={this.handleDataChange}
                        name="country"
                      />
                    </Form.Group>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          type="text"
                          value={this.state.city}
                          onChange={this.handleDataChange}
                          name="city"
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                          type="text"
                          value={this.state.state}
                          onChange={this.handleDataChange}
                          name="state"
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Pincode</Form.Label>
                        <Form.Control
                          type="number"
                          value={this.state.pincode}
                          onChange={this.handleDataChange}
                          name="pincode"
                        />
                      </Form.Group>
                    </Form.Row>
                    <center>
                      <button
                        type="button"
                        id="editButton"
                        to="/#"
                        onClick={this.handleChange}
                        class="btn btn-primary btn-lg"
                        style={{ display: "none" }}
                      >
                        Save Changes
                      </button>
                    </center>
                  </fieldset>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
        <br />
      </div>
    );
  }
}
export default Profile;
