import React, { Component } from "react";
import DropBox from "./Dropbox";
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
import { MdAddShoppingCart, MdAddAPhoto } from "react-icons/md";
import { TiUserAdd } from "react-icons/ti";
import ChooseCategories from "./chooseCategories";
import FillDetails from "./fillDetails";
import DropboxAddProduct from "./DropboxAddProduct";

import Choosesizeadd from "./choosesizeadd";
import MenChooseType from "./ChooseType/MenChooseType";
import KidsMainCategory from "./KidsMainCategory";
import KidsBoysChooseType from "./ChooseType/KidsBoysChooseType";
import KidsGirlsChooseType from "./ChooseType/KidsGirlsChooseType";
import KidsBabyChooseType from "./ChooseType/KidsBabyChooseType";
import WomenChooseType from "./ChooseType/WomenChooseType";

class signin2 extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClosexl = this.handleClosexl.bind(this);
    this.handleShowxl = this.handleShowxl.bind(this);
    this.onchangeCategory = this.onchangeCategory.bind(this);
    this.onchangeType = this.onchangeType.bind(this);
    this.improveState = this.improveState.bind(this);
    this.onchangedetails = this.onchangedetails.bind(this);
    this.onPreviousdetails = this.onPreviousdetails.bind(this);
    this.sizeaddback = this.sizeaddback.bind(this);
    this.sizeaddchange = this.sizeaddchange.bind(this);
    this.imageaddchange = this.imageaddchange.bind(this);
    this.imageaddback = this.imageaddback.bind(this);
    this.getregistered = this.getregistered.bind(this);
    this.state = {
      showxl: false,
      show: false,
      r1details: "",
      Branch: "",
      phone: "",
      gstnumber: "",
      address1: "",
      address2: "",
      country: "",
      city: "",
      state: "",
      zip: "",
      profile: "",
      cover: "",
      product: {
        product_category: "",
        product_type: "",
        product_details: "",
        size_color_price: "",
        images: "",
      },
      productBundle: [],
    };
  }
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  handleClosexl = () => this.setState({ showxl: false });
  handleShowxl = () => {
    this.setState({
      showxl: true,
      product: {
        product_category: "",
        product_type: "",
        product_details: "",
        size_color_price: "",
        images: "",
      },
    });
  };

  onchangeCategory(Categ) {
    this.setState({
      product: {
        product_category: Categ,
        product_type: "",
        product_details: "",
        size_color_price: "",
        images: "",
      },
    });
  }

  onchangeType(productType) {
    console.log(productType);
    this.setState({
      product: {
        product_category: this.state.product.product_category,
        product_type: productType,
        product_details: "",
        size_color_price: "",
        images: "",
      },
    });
  }

  onchangedetails(filleddetails) {
    console.log(filleddetails);
    this.setState({
      product: {
        product_category: this.state.product.product_category,
        product_type: this.state.product.product_type,
        product_details: JSON.parse(filleddetails),
        size_color_price: "",
        images: "",
      },
    });
  }

  onPreviousdetails() {
    this.setState({
      product: {
        product_category: this.state.product.product_category,
        product_type: "",
        product_details: "",
        size_color_price: "",
        images: "",
      },
    });
  }

  sizeaddchange(size_col) {
    this.setState({
      product: {
        product_category: this.state.product.product_category,
        product_type: this.state.product.product_type,
        product_details: this.state.product.product_details,
        size_color_price: size_col,
        images: "",
      },
    });
  }

  sizeaddback() {
    this.setState({
      product: {
        product_category: this.state.product.product_category,
        product_type: this.state.product.product_type,
        product_details: "",
        size_color_price: "",
        images: "",
      },
    });
  }

  imageaddchange(imagefile) {
    console.log(imagefile);
    this.setState(
      {
        product: {
          product_category: this.state.product.product_category,
          product_type: this.state.product.product_type,
          product_details: this.state.product.product_details,
          size_color_price: this.state.product.size_color_price,
          images: imagefile,
        },
      },
      () => {
        var temp = this.state.productBundle;
        temp.push(this.state.product);
        this.setState({
          productBundle: temp,
        });
      },
      () => {
        this.setState({
          product: {
            product_category: "",
            product_type: "",
            product_details: "",
            size_color_price: "",
            images: "",
          },
        });
      }
    );
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  imageaddback() {
    this.setState({
      product: {
        product_category: this.state.product.product_category,
        product_type: this.state.product.product_type,
        product_details: this.state.product.product_details,
        size_color_price: "",
        images: "",
      },
    });
  }

  improveState(drop, drop1) {
    this.setState({ [drop]: drop1 });
  }

  componentDidMount() {
    this.setState({ r1details: this.props.location.state.Regdetails });
  }

  getregistered() {}

  render() {
    console.log(this.state);

    return (
      <div className="backgroundSign">
        <Form onSubmit={this.getregistered}>
          <Row>
            <Col style={{ padding: "0px" }} md={1}></Col>
            <Col style={{ padding: "0px" }} md={10}>
              <div className="sign">
                <Jumbotron className="cover">
                  <DropBox
                    imgname="cover"
                    improveState={this.improveState}
                    thumb="thumb_cover"
                    thumbsContainer="thumbsContainer_cover"
                    img="img_cover"
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
                  improveState={this.improveState}
                  thumb="thumb_profile"
                  thumbsContainer="thumbsContainer_profile"
                  img="img_profile"
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
                    <b>
                      Welcome{" "}
                      {this.state.r1details !== ""
                        ? this.state.r1details.Name
                        : "Hero"}
                      !
                    </b>
                  </h2>
                  <h5 style={{ color: "blue", padding: "5px" }}>
                    {this.state.r1details !== ""
                      ? this.state.r1details.Email
                      : "someone@some.com"}
                  </h5>
                </div>
              </div>
            </Col>
            <Col style={{ padding: "0px" }} md={1}></Col>
          </Row>

          <Row>
            <Col style={{ padding: "0px" }} sm={1}></Col>
            <Col style={{ padding: "0px" }} sm={3}>
              <div className="detailsCard">
                <Card
                  style={{
                    border: "0px",
                    borderRadius: "10px",
                  }}
                >
                  <Card.Body>
                    <Form.Group controlId="formGroupBranchName">
                      <Form.Label>Branch Name</Form.Label>
                      <Form.Control
                        onChange={this.handleChange}
                        name="Branch"
                        type="text"
                        required
                        placeholder="Branch"
                      />
                    </Form.Group>

                    <Form.Group controlId="formGroupPhone">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        onChange={this.handleChange}
                        name="phone"
                        type="phone"
                        required
                        placeholder="123-456-789"
                      />
                    </Form.Group>

                    <Form.Group controlId="formGroupPhone">
                      <Form.Label>GST Number</Form.Label>
                      <Form.Control
                        onChange={this.handleChange}
                        name="gstnumber"
                        type="number"
                        required
                        placeholder="GST"
                      />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        onChange={this.handleChange}
                        name="address1"
                        required
                        type="text"
                        placeholder="1234 Main St"
                      />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                      <Form.Label>Address 2</Form.Label>
                      <Form.Control
                        onChange={this.handleChange}
                        name="address2"
                        required
                        type="text"
                        placeholder="Apartment, studio, or floor"
                      />
                    </Form.Group>

                    <Form.Group controlId="formGroupCountry">
                      <Form.Label>Country</Form.Label>
                      <Form.Control
                        onChange={this.handleChange}
                        name="country"
                        type="text"
                        required
                        placeholder="India"
                      />
                    </Form.Group>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          onChange={this.handleChange}
                          name="city"
                          required
                          type="text"
                          placeholder="Trichy"
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                          onChange={this.handleChange}
                          name="state"
                          type="text"
                          required
                          placeholder="Tamil Nadu"
                        />
                      </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="formGridZip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control
                        onChange={this.handleChange}
                        name="zip"
                        required
                        type="number"
                        placeholder="620012"
                      />
                    </Form.Group>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col sm={7} style={{ padding: "0px" }}>
              <Card className="addproductcard">
                <Card.Body>
                  <b>NEW ADD PRODUCT</b>
                  <Card className="AddingProducts" onClick={this.handleShowxl}>
                    <Card.Body>
                      <MdAddShoppingCart size="40" color="violet" />
                      <br />
                      Click & Add Product
                    </Card.Body>
                  </Card>
                  <Row style={{ margin: "5px" }}>
                    {this.state.productBundle.map((pro, index) => {
                      return (
                        <div>
                          <Col md={2}>
                            <Card class="preview-products">
                              <Card.Body style={{ padding: "0.75rem" }}>
                                <img
                                  style={{ width: "100%", height: "100%" }}
                                  src={
                                    pro.images[0]
                                      ? pro.images[0].preview
                                      : require("../images/default.jpg")
                                  }
                                  alt="preview"
                                />
                              </Card.Body>
                            </Card>
                          </Col>
                        </div>
                      );
                    })}
                  </Row>
                  <Modal
                    backdrop="static"
                    size="lg"
                    show={this.state.showxl}
                    onHide={this.handleClosexl}
                  >
                    {this.state.product.product_category === "" ? (
                      <Modal.Body
                        style={{ margin: "10px", backgroundColor: "white" }}
                      >
                        <h6
                          onClick={this.handleClosexl}
                          className="modalclosing"
                        >
                          X
                        </h6>
                        <ChooseCategories
                          changeCategory={this.onchangeCategory}
                        />
                      </Modal.Body>
                    ) : this.state.product.product_type === "" &&
                      this.state.product.product_category === "Men" ? (
                      <Modal.Body
                        style={{ margin: "10px", backgroundColor: "#dedede" }}
                      >
                        <h6
                          onClick={this.handleClosexl}
                          className="modalclosing"
                        >
                          X
                        </h6>
                        <MenChooseType onchangeType={this.onchangeType} />
                      </Modal.Body>
                    ) : this.state.product.product_type === "" &&
                      this.state.product.product_category === "Kids" ? (
                      <Modal.Body
                        style={{ margin: "10px", backgroundColor: "white" }}
                      >
                        <h6
                          onClick={this.handleClosexl}
                          className="modalclosing"
                        >
                          X
                        </h6>
                        <KidsMainCategory
                          changeCategory={this.onchangeCategory}
                        />
                      </Modal.Body>
                    ) : this.state.product.product_type === "" &&
                      this.state.product.product_category === "Boys" ? (
                      <Modal.Body
                        style={{ margin: "10px", backgroundColor: "#dedede" }}
                      >
                        <h6
                          onClick={this.handleClosexl}
                          className="modalclosing"
                        >
                          X
                        </h6>
                        <KidsBoysChooseType onchangeType={this.onchangeType} />
                      </Modal.Body>
                    ) : this.state.product.product_type === "" &&
                      this.state.product.product_category === "Girls" ? (
                      <Modal.Body
                        style={{ margin: "10px", backgroundColor: "#dedede" }}
                      >
                        <h6
                          onClick={this.handleClosexl}
                          className="modalclosing"
                        >
                          X
                        </h6>
                        <KidsGirlsChooseType onchangeType={this.onchangeType} />
                      </Modal.Body>
                    ) : this.state.product.product_type === "" &&
                      this.state.product.product_category === "Babies" ? (
                      <Modal.Body
                        style={{ margin: "10px", backgroundColor: "#dedede" }}
                      >
                        <h6
                          onClick={this.handleClosexl}
                          className="modalclosing"
                        >
                          X
                        </h6>
                        <KidsBabyChooseType onchangeType={this.onchangeType} />
                      </Modal.Body>
                    ) : this.state.product.product_type === "" &&
                      this.state.product.product_category === "Women" ? (
                      <Modal.Body
                        style={{ margin: "10px", backgroundColor: "#dedede" }}
                      >
                        <h6
                          onClick={this.handleClosexl}
                          className="modalclosing"
                        >
                          X
                        </h6>
                        <WomenChooseType onchangeType={this.onchangeType} />
                      </Modal.Body>
                    ) : this.state.product.product_details === "" ? (
                      <Modal.Body>
                        <h6
                          onClick={this.handleClosexl}
                          className="modalclosing"
                        >
                          X
                        </h6>
                        <FillDetails
                          onPreviousfilldetails={this.onPreviousdetails}
                          onchangefilldetails={this.onchangedetails}
                          categtype={this.state.product.product_type}
                        />
                      </Modal.Body>
                    ) : this.state.product.size_color_price === "" ? (
                      <Choosesizeadd
                        onsizeaddchange={this.sizeaddchange}
                        onsizeaddback={this.sizeaddback}
                        name={this.state.product.product_type}
                      />
                    ) : this.state.product.images === "" ? (
                      <Modal.Body>
                        <DropboxAddProduct
                          imageaddchange={this.imageaddchange}
                          imageaddback={this.imageaddback}
                        />
                      </Modal.Body>
                    ) : (
                      <Modal.Header closeButton>
                        "Product Added Successfully"
                      </Modal.Header>
                    )}
                  </Modal>
                </Card.Body>
              </Card>
            </Col>
            <Col style={{ padding: "0px" }} sm={1}></Col>
          </Row>
          <Row>
            <Col style={{ padding: "0px" }} md={4}></Col>
            <Col style={{ padding: "0px" }} md={7}>
              <Card className="submitcard">
                <Card.Body>
                  <Button style={{ width: "200px" }} type="submit">
                    Submit
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col style={{ padding: "0px" }} md={1}></Col>
          </Row>
        </Form>
      </div>
    );
  }
}
export default signin2;
