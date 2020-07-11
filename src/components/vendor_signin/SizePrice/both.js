//for coat all for men (shirt,pant) and chudidar
import React, { useState, Fragment } from "react";
import { Button, Modal, Table, Row, Col } from "react-bootstrap";
import "./sizeadd.css";

const Both = (props) => {
  const [inputFields, setInputFields] = useState([
    {
      brand: "",
      color: "#000000",
      size: "",
      sholder: "",
      chest: "",
      sleeve: "",
      neck: "",
      lengthshirt: "",
      waist: "",
      inseamlength: "",
      rise: "",
      lengthpant: "",
      quantity: "",
      amt: "",
    },
  ]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({
      brand: "",
      color: "#000000",
      size: "",
      sholder: "",
      chest: "",
      sleeve: "",
      neck: "",
      lengthshirt: "",
      waist: "",
      inseamlength: "",
      rise: "",
      lengthpant: "",
      quantity: "",
      amt: "",
    });
    setInputFields(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "color") {
      values[index].color = event.target.value;
    } else if (event.target.name === "size") {
      values[index].size = event.target.value;
    } else if (event.target.name === "quantity") {
      values[index].quantity = event.target.value;
    } else if (event.target.name === "brand") {
      values[index].brand = event.target.value;
    } else if (event.target.name === "waist") {
      values[index].waist = event.target.value;
    } else if (event.target.name === "inseamlength") {
      values[index].inseamlength = event.target.value;
    } else if (event.target.name === "rise") {
      values[index].rise = event.target.value;
    } else if (event.target.name === "lengthpant") {
      values[index].lengthpant = event.target.value;
    } else if (event.target.name === "amt") {
      values[index].amt = event.target.value;
    } else if (event.target.name === "sholder") {
      values[index].sholder = event.target.value;
    } else if (event.target.name === "chest") {
      values[index].chest = event.target.value;
    } else if (event.target.name === "neck") {
      values[index].neck = event.target.value;
    } else if (event.target.name === "sleeve") {
      values[index].sleeve = event.target.value;
    } else if (event.target.name === "lengthshirt") {
      values[index].lengthshirt = event.target.value;
    } else {
    }

    setInputFields(values);
  };
  const back = (e) => {
    props.onchoosesizeaddback();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputFields", inputFields);
    props.onchoosesizeaddchange(inputFields);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>fill product </Modal.Title>
        </Modal.Header>
        <div className="hello">
          <button
            className="btn btn-light"
            type="button"
            style={{
              margin: "10px",
            }}
            onClick={() => handleAddFields()}
          >
            +Add new list
          </button>
          {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
              <div>
                <label
                  htmlFor="brand"
                  style={{
                    marginTop: "10px",
                    marginBottom: "5px",
                  }}
                >
                  <h6>Brand Name</h6>
                </label>
                <div className="center">
                  <input
                    type="text"
                    className="form-control"
                    id="brand"
                    name="brand"
                    placeholder="Enter Brand Name"
                    style={{
                      width: "300px",
                    }}
                    value={inputField.brand}
                    onChange={(event) => handleInputChange(index, event)}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="color"
                  style={{
                    marginTop: "10px",
                    marginBottom: "5px",
                  }}
                >
                  <h6>choose Color</h6>
                </label>
                <br></br>
                <div className="center">
                  <input
                    type="color"
                    id="color"
                    name="color"
                    // className="form-control"
                    style={{ width: "90px" }}
                    value={inputField.color}
                    onChange={(event) => handleInputChange(index, event)}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="size"
                  style={{
                    marginTop: "10px",
                    marginBottom: "5px",
                  }}
                >
                  <h6>size</h6>
                </label>
                <div className="center">
                  <input
                    list="bro"
                    name="size"
                    className="form-control"
                    style={{
                      width: "300px",
                      // marginLeft: "35%",
                      // marginRight: "35%",
                    }}
                    value={inputField.size}
                    onChange={(event) => handleInputChange(index, event)}
                    placeholder="Enter or Choose Size"
                  />
                  <datalist id="bro">
                    <option value="free" />
                    <option value="5xs(26)" />
                    <option value="4xs(28)" />
                    <option value="3xs(30)" />
                    <option value="2xs(34)" />
                    <option value="xs(36)" />
                    <option value="s(38)" />
                    <option value="m(40)" />
                    <option value="l(42)" />
                    <option value="xl(44)" />
                    <option value="2xl(46)" />
                    <option value="3xl(48)" />
                    <option value="4xl(50)" />
                    <option value="5xl(52)" />
                  </datalist>
                </div>
              </div>
              <div>
                <h5
                  style={{
                    marginTop: "10px",
                    marginBottom: "5px",
                  }}
                >
                  Top
                </h5>
                <Row>
                  <Col md={3}>
                    <label
                      htmlFor="sholder"
                      style={{
                        marginTop: "10px",
                        marginBottom: "5px",
                      }}
                    >
                      <h6>Sholder</h6>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="sholder"
                      name="sholder"
                      placeholder="Enter sholder in inches"
                      value={inputField.sholder}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </Col>
                  <Col md={3}>
                    <label
                      htmlFor="chest"
                      style={{
                        marginTop: "10px",
                        marginBottom: "5px",
                      }}
                    >
                      <h6>Chest</h6>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="chest"
                      name="chest"
                      placeholder="Enter Chest in inches"
                      value={inputField.chest}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </Col>
                  <Col md={3}>
                    <label
                      htmlFor="sleeve"
                      style={{
                        marginTop: "10px",
                        marginBottom: "5px",
                      }}
                    >
                      <h6>Sleeve</h6>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="sleeve"
                      name="sleeve"
                      placeholder="Enter Sleeve in inches"
                      value={inputField.sleeve}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </Col>
                  <Col md={3}>
                    <label
                      htmlFor="size"
                      style={{
                        marginTop: "10px",
                        marginBottom: "5px",
                      }}
                    >
                      <h6>Neck</h6>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="neck"
                      name="neck"
                      placeholder="Enter neck in inches"
                      value={inputField.neck}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </Col>
                  <Col md={{ span: 6, offset: 3 }}>
                    <label
                      htmlFor="lengthshirt"
                      style={{
                        marginTop: "10px",
                        marginBottom: "5px",
                      }}
                    >
                      <h6>Length</h6>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="lengthshirt"
                      name="lengthshirt"
                      placeholder="Enter Length in inches"
                      value={inputField.lengthshirt}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </Col>
                </Row>
                <h5
                  style={{
                    marginTop: "10px",
                    marginBottom: "5px",
                  }}
                >
                  buttom
                </h5>
                <Row>
                  <Col md={3}>
                    <label
                      htmlFor="waist"
                      style={{
                        marginTop: "10px",
                        marginBottom: "5px",
                      }}
                    >
                      <h6>Waist</h6>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="waist"
                      name="waist"
                      placeholder="Enter waist in inches"
                      value={inputField.waist}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </Col>
                  <Col md={3}>
                    <label
                      htmlFor="inseamlength"
                      style={{
                        marginTop: "10px",
                        marginBottom: "5px",
                      }}
                    >
                      <h6>Inseamlength</h6>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="inseamlength"
                      name="inseamlength"
                      placeholder="Enter inseamlength in inches"
                      value={inputField.inseamlength}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </Col>
                  <Col md={3}>
                    <label
                      htmlFor="rise"
                      style={{
                        marginTop: "10px",
                        marginBottom: "5px",
                      }}
                    >
                      <h6>Rise</h6>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="rise"
                      name="rise"
                      placeholder="Enter rise in inches"
                      value={inputField.rise}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </Col>
                  <Col md={3}>
                    <label
                      htmlFor="lengthpant"
                      style={{
                        marginTop: "10px",
                        marginBottom: "5px",
                      }}
                    >
                      <h6>Length</h6>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="lengthpant"
                      name="lengthpant"
                      placeholder="Enter Length in inches"
                      value={inputField.lengthpant}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </Col>
                </Row>
              </div>
              <div>
                <label
                  htmlFor="quantity"
                  style={{
                    marginTop: "10px",
                    marginBottom: "5px",
                  }}
                >
                  <h6>Quantity</h6>
                </label>
                <div className="center">
                  <input
                    type="number"
                    className="form-control"
                    id="quantity"
                    name="quantity"
                    style={{
                      width: "300px",
                      // marginLeft: "35%",
                      // marginRight: "35%",
                    }}
                    placeholder="Enter quantity of product"
                    value={inputField.hello}
                    onChange={(event) => handleInputChange(index, event)}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="amt"
                  style={{
                    marginTop: "10px",
                    marginBottom: "5px",
                  }}
                >
                  <h6>Amount</h6>
                </label>
                <div className="center">
                  <input
                    type="number"
                    className="form-control"
                    id="amt"
                    name="amt"
                    style={{
                      width: "300px",
                      // marginLeft: "35%",
                      // marginRight: "35%",
                    }}
                    placeholder="Enter single product price "
                    value={inputField.hello}
                    onChange={(event) => handleInputChange(index, event)}
                  />
                </div>
              </div>
              <div>
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => handleRemoveFields(index)}
                  style={{ margin: "10px" }}
                >
                  Remove
                </button>
              </div>
              <hr
                style={{
                  border: "0px",
                  height: "1px",
                  backgroundImage:
                    " linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))",
                }}
              />
            </Fragment>
          ))}
        </div>

        <Modal.Footer className="fill-modal-footer">
          <div className="submit-button">
            <Button
              className="btn btn-primary mr-2"
              type="submit"
              onClick={back}
              // onSubmit={handleSubmit}
            >
              back
            </Button>
            <Button
              className="btn btn-success mr-2"
              type="submit"
              onSubmit={handleSubmit}
            >
              Save
            </Button>
          </div>
        </Modal.Footer>
      </form>
    </>
  );
};
export default Both;
