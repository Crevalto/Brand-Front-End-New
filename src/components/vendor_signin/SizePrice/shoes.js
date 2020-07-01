//shoes
import React, { useState, Fragment } from "react";
import { Modal } from "react-bootstrap";
import "./sizeadd.css";

function Shoes(props) {
  // this will create
  const [inputFields, setInputFields] = useState([
    { brand: "", color: "#000000", size: "", quantity: "", amt: "" },
  ]);

  const handleAddFields = () => {
    const values = [...inputFields];

    values.push({
      brand: "",
      color: "#000000",
      size: "",
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
    } else {
      values[index].amt = event.target.value;
    }

    setInputFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputFields", inputFields);
    props.onsizeaddchange(inputFields);
  };
  const back = (e) => {
    props.onsizeaddback();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1 className="addProdTitle" stlye={{ color: "white" }}>
              Fill details
            </h1>
          </Modal.Title>
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
                    // className="form-control"
                    id="color"
                    name="color"
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
                    }}
                    value={inputField.size}
                    onChange={(event) => handleInputChange(index, event)}
                    placeholder="Enter or Choose Size"
                  />
                  <datalist id="bro">
                    <option value="1" />
                    <option value="1.5" />
                    <option value="2" />
                    <option value="2.5" />
                    <option value="3" />
                    <option value="3.5" />
                    <option value="4" />
                    <option value="4.5" />
                    <option value="5" />
                    <option value="5.5" />
                    <option value="6" />
                    <option value="6.5" />
                    <option value="7" />
                    <option value="7.5" />
                    <option value="8" />
                    <option value="8.5" />
                    <option value="9" />
                    <option value="9.5" />
                    <option value="10" />
                    <option value="10.5" />
                    <option value="11" />
                    <option value="11.5" />
                    <option value="12" />
                    <option value="12.5" />
                    <option value="13" />
                    <option value="13.5" />
                    <option value="14" />
                    <option value="14.5" />
                  </datalist>
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
        <Modal.Footer className="fill-modal-footer">
          <div className="submit-button">
            <button
              className="btn btn-primary mr-2"
              type="submit"
              // onSubmit={handleSubmit}
              onClick={back}
            >
              back
            </button>
            <button
              className="btn btn-primary mr-2"
              type="submit"
              onSubmit={handleSubmit}
            >
              Save
            </button>
          </div>
        </Modal.Footer>
      </form>
    </>
  );
}
export default Shoes;
