// tie,belt for all

import React, { useState, Fragment } from "react";
import { Modal } from "react-bootstrap";
import "./sizeadd.css";

const Tie = (props) => {
  const [inputFields, setInputFields] = useState([
    {
      brand: "",
      color: "#000000",
      width: "",
      length: "",
      quantity: "",
      amt: "",
    },
  ]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({
      brand: "",
      color: "#000000",
      width: "",
      length: "",
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
    } else if (event.target.name === "width") {
      values[index].width = event.target.value;
    } else if (event.target.name === "length") {
      values[index].length = event.target.value;
    } else if (event.target.name === "quantity") {
      values[index].quantity = event.target.value;
    } else if (event.target.name === "brand") {
      values[index].brand = event.target.value;
    } else {
      values[index].amt = event.target.value;
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
    <div>
      <form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>fill product </Modal.Title>
        </Modal.Header>
        <div className="hello">
          <button
            className="btn btn-light"
            type="button"
            onClick={() => handleAddFields()}
            style={{
              margin: "10px",
            }}
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
                  <h6>Choose Color</h6>
                </label>
                <div className="center">
                  <input
                    type="color"
                    // className="form-control"
                    id="color"
                    name="color"
                    // placeholder="Choose Color"
                    style={{ width: "90px" }}
                    value={inputField.color}
                    onChange={(event) => handleInputChange(index, event)}
                  />
                </div>
              </div>
              <div>
                {/* <lable
                  style={{
                    marginTop: "10px",
                    marginBottom: "5px",
                  }}
                >
                  <h6>size</h6>
                </lable> */}
                <label
                  htmlFor="width"
                  style={{
                    marginTop: "10px",
                    marginBottom: "5px",
                  }}
                >
                  <h6>Width</h6>
                </label>
                <div className="center">
                  <input
                    type="number"
                    className="form-control"
                    id="width"
                    name="width"
                    placeholder="Enter Width in inches"
                    style={{
                      width: "300px",
                    }}
                    value={inputField.width}
                    onChange={(event) => handleInputChange(index, event)}
                  />
                </div>

                <label
                  htmlFor="length"
                  style={{
                    marginTop: "10px",
                    marginBottom: "5px",
                  }}
                >
                  <h6>Length</h6>
                </label>
                <div className="center">
                  <input
                    type="number"
                    className="form-control"
                    id="length"
                    name="length"
                    placeholder="Enter Length in inches"
                    style={{
                      width: "300px",
                    }}
                    value={inputField.length}
                    onChange={(event) => handleInputChange(index, event)}
                  />
                </div>
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
                    placeholder="Enter quantity of product"
                    style={{
                      width: "300px",
                    }}
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
                    placeholder="Enter single product price "
                    style={{
                      width: "300px",
                    }}
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
        {/* <pre>{JSON.stringify(inputFields, null, 2)}</pre> */}

        <Modal.Footer>
          <div className="submit-button">
            <button
              className="btn btn-primary mr-2"
              type="submit"
              onClick={back}
              // onSubmit={handleSubmit}
            >
              Back
            </button>
            <button
              className="btn btn-success mr-2"
              type="submit"
              onSubmit={handleSubmit}
            >
              Save
            </button>
          </div>
        </Modal.Footer>
      </form>
    </div>
  );
};
export default Tie;
