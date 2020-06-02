import React, { Component } from "react";
import DropBox from "./Dropbox";
import icon_add from "../images/icon_add.svg";
import {
  Jumbotron,
  Card,
  Form,
  Col,
  Row,
  Modal,
  Button,
} from "react-bootstrap";
import "./signin.css";
import { MdAddAPhoto } from "react-icons/md";
import { TiUserAdd } from "react-icons/ti";

class signin2 extends Component {
  constructor() {
    super();
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.state = {
      show: false,
    };
  }
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

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

    console.log(JSON.parse(localStorage.getItem("cover")));
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
          <div className="details">
            <h2>
              <b>Welcome Google!</b>
            </h2>
            <h5 style={{ color: "blue", padding: "5px" }}>someone@some.com</h5>
          </div>
        </div>

        <Row>
          <Col md={4}>
            <div className="detailsCard">
              <Card
                style={{
                  width: "25rem",
                  border: "0px",
                  borderRadius: "10px",
                }}
              >
                <Card.Body>
                  <Form.Group controlId="formGroupBranchName">
                    <Form.Label>Branch Name</Form.Label>
                    <Form.Control type="text" placeholder="Branch" />
                  </Form.Group>

                  <Form.Group controlId="formGroupPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="phone" placeholder="123-456-789" />
                  </Form.Group>

                  <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                  </Form.Group>

                  <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                  </Form.Group>

                  <Form.Group controlId="formGroupCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" placeholder="India" />
                  </Form.Group>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" placeholder="Trichy" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Control type="text" placeholder="Tamil Nadu" />
                    </Form.Group>
                  </Form.Row>
                  <Form.Group controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="number" placeholder="620012" />
                  </Form.Group>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col md={5}>
            <Card className="addproductcard">
              <Card.Body>
                <b>NEW ADD PRODUCT</b>
                <Card className="AddingProducts" onClick={this.handleShow}>
                  <Card.Body>
                    <img width="150" height="150" src={icon_add} />
                    <br />
                    Click & Add Product
                  </Card.Body>
                </Card>

                <Modal show={this.state.show} onHide={this.handleClose}>
                  <Modal.Body>
                  <button type="button" to ="/#" class="btn btn-primary btn-lg">Mens</button>
                  <button type="button" to ="/#" class="btn btn-primary btn-lg">Womens</button>
                  <button type="button" to ="/#" class="btn btn-primary btn-lg">Kid's</button>


                    
                    
                  </Modal.Body>
                </Modal>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default signin2;
