//saree for women if girl kid
import React, { useState, Fragment } from "react";
import { Modal } from "react-bootstrap";
import "./sizeadd.css";

const Shoes = () => {
  // this will create
  const [inputFields, setInputFields] = useState([
    { brand: "", color: "", sareelength: "", quantity: "", amt: "" },
  ]);

  const handleAddFields = () => {
    const values = [...inputFields];

    values.push({
      brand: "",
      color: "",
      sareelength: "",
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
    } else if (event.target.name === "sareelength") {
      values[index].sareelength = event.target.value;
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
                  <h6>Saree length</h6>
                </label>
                <div className="center">
                  <input
                    list="bro"
                    name="sareelength"
                    className="form-control"
                    style={{
                      width: "300px",
                    }}
                    value={inputField.size}
                    onChange={(event) => handleInputChange(index, event)}
                    placeholder="Enter or Choose SareeLength"
                  />
                  <datalist id="bro">
                    <option value="0.35 m" />
                    <option value="0.50 m" />
                    <option value="0.8 m" />
                    <option value="0.80 m" />
                    <option value="06.3 m" />
                    <option value="200 m" />
                    <option value="0.525 m" />
                    <option value="0.400 m" />
                    <option value="0.5 m" />
                    <option value="0.550 m" />
                    <option value="1 m" />
                    <option value="2.5 m" />
                    <option value="2.50 m" />
                    <option value="2.75+1.80 m" />
                    <option value="2.80 m" />
                    <option value="38 m" />
                    <option value="4.40 m" />
                    <option value="4.5 m" />
                    <option value="4.5 m m" />
                    <option value="4.5m m" />
                    <option value="4.8 m" />
                    <option value="5 m" />
                    <option value="5,4 m" />
                    <option value="5,5 m" />
                    <option value="5-5 m" />
                    <option value="5-50 m" />
                    <option value="5..3 m" />
                    <option value="5..30 m" />
                    <option value="5..40 m" />
                    <option value="5..5 m" />
                    <option value="5..50 m" />
                    <option value="5.0 m" />
                    <option value="5.05 m" />
                    <option value="5.1 m" />
                    <option value="5.10 m" />
                    <option value="5.11 m" />
                    <option value="5.12 m" />
                    <option value="5.13 m" />
                    <option value="5.14 m" />
                    <option value="5.15 m" />
                    <option value="5.16 m" />
                    <option value="5.17 m" />
                    <option value="5.18 m" />
                    <option value="5.19 m" />
                    <option value="5.2 m" />
                    <option value="5.20 m" />
                    <option value="5.24 m" />
                    <option value="5.25 m" />
                    <option value="5.25 m m" />
                    <option value="5.26 m" />
                    <option value="5.27 m" />
                    <option value="5.28 m" />
                    <option value="5.29 m" />
                    <option value="5.3 m" />
                    <option value="5.3 m m" />
                    <option value="5.30 m" />
                    <option value="5.31 m" />
                    <option value="5.32 m" />
                    <option value="5.33 m" />
                    <option value="5.34 m" />
                    <option value="5.35 m" />
                    <option value="5.35mtr m" />
                    <option value="5.36 m" />
                    <option value="5.37 m" />
                    <option value="5.4 m" />
                    <option value="5.4. m" />
                    <option value="5.40 m" />
                    <option value="5.40` m" />
                    <option value="5.42 m" />
                    <option value="5.43 m" />
                    <option value="5.45 m" />
                    <option value="5.5 m" />
                    <option value="5.5 M m" />
                    <option value="5.5 m m" />
                    <option value="5.5 MT m" />
                    <option value="5.5 mt m" />
                    <option value="5.5 MTR m" />
                    <option value="5.5+MTRS m" />
                    <option value="5.5-MTRS m" />
                    <option value="5.5. m" />
                    <option value="5.5. m m" />
                    <option value="5.50 m" />
                    <option value="5.50 m m" />
                    <option value="5.50 meter m" />
                    <option value="5.50 mtr m" />
                    <option value="5.50 mtrs m" />
                    <option value="5.50 Mtrs m" />
                    <option value="5.51 m" />
                    <option value="5.53 m" />
                    <option value="5.54 m" />
                    <option value="5.55 m" />
                    <option value="5.56 m" />
                    <option value="5.57 m" />
                    <option value="5.5` m" />
                    <option value="5.5M m" />
                    <option value="5.5m m" />
                    <option value="5.5meter m" />
                    <option value="5.6 m" />
                    <option value="5.60 m" />
                    <option value="5.60 mtr m" />
                    <option value="5.62 m" />
                    <option value="5.65 m" />
                    <option value="5.7 m" />
                    <option value="5.70 m" />
                    <option value="5.8 m" />
                    <option value="5.80 m" />
                    <option value="5.9 m" />
                    <option value="5/50 m" />
                    <option value="5m m" />
                    <option value="6 m" />
                    <option value="6 yad m" />
                    <option value="6 yard m" />
                    <option value="6 yards m" />
                    <option value="6. m" />
                    <option value="6.0 m" />
                    <option value="6.00 m" />
                    <option value="6.1 m" />
                    <option value="6.10 m" />
                    <option value="6.12 m" />
                    <option value="6.2 m" />
                    <option value="6.2 meter" />
                    <option value="6.20 m" />
                    <option value="6.25 m" />
                    <option value="6.3 M" />
                    <option value="6.3 m" />
                    <option value="6.30 m" />
                    <option value="6.30 mtr Including Blouse Piece m" />
                    <option value="6.3m m" />
                    <option value="6.4 m" />
                    <option value="6.40 m" />
                    <option value="6.5 m" />
                    <option value="6.50 m" />
                    <option value="6.5m m" />
                    <option value="6.6 m" />
                    <option value="6.7 m" />
                    <option value="6.8 m" />
                    <option value="620 m" />
                    <option value="63 m" />
                    <option value="6m m" />
                    <option value="6MTR m" />
                    <option value="6yard m" />
                    <option value="7.5m m" />
                    <option value="8 m" />
                    <option value="8m m" />
                    <option value="9 m" />
                    <option value="Mekhla 2.75m & Chador 1.75 m" />
                    <option value="Na m" />
                    <option value="Saree: 5.35mtr m" />
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
};
export default Shoes;
