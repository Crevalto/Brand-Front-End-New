import React, { Component } from "react";
import DropBox from "./Dropbox";
import { Jumbotron, Card, Form, Col, Row, Modal } from "react-bootstrap";
import "./signin.css";
import { MdAddShoppingCart, MdAddAPhoto } from "react-icons/md";
import { TiUserAdd } from "react-icons/ti";
import "./ChooseType.css";
import ChooseCategories from "./chooseCategories";
import ChooseType from "./ChooseType";
import FillDetails from "./fillDetails";
import ImageDrop from "./row";
import Sizeadd from "./SizePrice/Sizeadd";
import Tie from "./SizePrice/tie";
import Shoes from "./SizePrice/shoes";

class signin2 extends Component {
  constructor() {
    super();
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
    this.state = {
      showxl: false,
      show: false,
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
    console.log(this.state);

    return (
      <div className="backgroundSign">
        <div className="sign">
          <Jumbotron className="cover">
            <DropBox
              imgname="cover"
              improveState={this.improveState}
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
            improveState={this.improveState}
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
          <Col md={8}>
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
                          <Card
                            style={{
                              width: "16rem",
                              height: "400px",
                              marginTop: "10px",
                            }}
                          >
                            <Card.Body style={{ padding: "0.75rem" }}>
                              <img
                                style={{ width: "100%", height: "100%" }}
                                src={pro.images[0].preview}
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
                      <h6 onClick={this.handleClosexl} className="modalclosing">
                        X
                      </h6>
                      <ChooseCategories
                        changeCategory={this.onchangeCategory}
                      />
                    </Modal.Body>
                  ) : this.state.product.product_type === "" ? (
                    <Modal.Body
                      style={{ margin: "10px", backgroundColor: "#dedede" }}
                    >
                      <h6 onClick={this.handleClosexl} className="modalclosing">
                        X
                      </h6>
                      <ChooseType onchangeType={this.onchangeType} />
                    </Modal.Body>
                  ) : this.state.product.product_details === "" ? (
                    <Modal.Body>
                      <h6 onClick={this.handleClosexl} className="modalclosing">
                        X
                      </h6>
                      <FillDetails
                        onPreviousfilldetails={this.onPreviousdetails}
                        onchangefilldetails={this.onchangedetails}
                        categtype={this.state.product.product_type}
                      />
                    </Modal.Body>
                  ) : this.state.product.size_color_price === "" ? (
                    this.state.product.product_type === "tie" ||
                    this.state.product.product_type === "belt" ? (
                      <Modal.Body>
                        <Tie
                          onsizeaddchange={this.sizeaddchange}
                          onsizeaddback={this.sizeaddback}
                        />
                      </Modal.Body>
                    ) : this.state.product.product_type === "shoes" ? (
                      <Modal.Body>
                        <Shoes
                          onsizeaddchange={this.sizeaddchange}
                          onsizeaddback={this.sizeaddback}
                        />
                      </Modal.Body>
                    ) : (
                      <Modal.Body>
                        <Sizeadd
                          onsizeaddchange={this.sizeaddchange}
                          onsizeaddback={this.sizeaddback}
                        />
                      </Modal.Body>
                    )
                  ) : this.state.product.images === "" ? (
                    <Modal.Body>
                      <ImageDrop
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
        </Row>
      </div>
    );
  }
}
export default signin2;
