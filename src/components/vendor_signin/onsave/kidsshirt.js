//kid shirt and tshirt
import React, { useState, Fragment } from "react";
import { Modal, Table } from "react-bootstrap";
import "./sizeadd.css";

const Sizeadd = () => {
  // inputfield is state and setinputfield id update component
  const [inputFields, setInputFields] = useState([
    {
      brand: "",
      color: "",
      size: "",
      sholder: "",
      chest: "",
      sleeve: "",
      neck: "",
      length: "",
      quantity: "",
      amt: "",
    },
  ]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({
      brand: "",
      color: "",
      size: "",
      sholder: "",
      chest: "",
      sleeve: "",
      neck: "",
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
    } else if (event.target.name === "size") {
      values[index].size = event.target.value;
    } else if (event.target.name === "quantity") {
      values[index].quantity = event.target.value;
    } else if (event.target.name === "brand") {
      values[index].brand = event.target.value;
    } else if (event.target.name === "sholder") {
      values[index].sholder = event.target.value;
    } else if (event.target.name === "chest") {
      values[index].chest = event.target.value;
    } else if (event.target.name === "sleeve") {
      values[index].sleeve = event.target.value;
    } else if (event.target.name === "neck") {
      values[index].neck = event.target.value;
    } else if (event.target.name === "length") {
      values[index].length = event.target.value;
    } else if (event.target.name === "amt") {
      values[index].amt = event.target.value;
    } else {
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
                  <h6>Age Group</h6>
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
                    <option value="2 - 3 years" />
                    <option value="3 - 4 years" />
                    <option value="4 - 5 years" />
                    <option value="5 - 6 years" />
                    <option value="6 - 7 years" />
                    <option value="7 - 8 years" />
                    <option value="8 - 9 years" />
                    <option value="9 - 10 years" />
                    <option value="10 - 11 years" />
                    <option value="11 - 12 years" />
                    <option value="12 - 13 years" />
                    <option value="13 - 14 years" />
                    <option value="14 - 15 years" />
                    <option value="15 - 16 years" />
                    <option value="16 - 17 years" />
                    <option value="17 - 18 years" />
                  </datalist>
                </div>
              </div>
              <div>
                <Table>
                  <thead>
                    <tr>
                      <th>Sholder</th>
                      <th>Chest</th>
                      <th>Sleeve</th>
                      <th>Neck</th>
                      <th>Length</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          type="number"
                          id="sholder"
                          name="sholder"
                          placeholder="Enter sholder in inches"
                          value={inputField.sholder}
                          onChange={(event) => handleInputChange(index, event)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          id="chest"
                          name="chest"
                          placeholder="Enter Chest in inches"
                          value={inputField.chest}
                          onChange={(event) => handleInputChange(index, event)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          id="sleeve"
                          name="sleeve"
                          placeholder="Enter Sleeve in inches"
                          value={inputField.sleeve}
                          onChange={(event) => handleInputChange(index, event)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          id="neck"
                          name="neck"
                          placeholder="Enter neck in inches"
                          value={inputField.neck}
                          onChange={(event) => handleInputChange(index, event)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          id="length"
                          name="length"
                          placeholder="Enter Length in inches"
                          value={inputField.length}
                          onChange={(event) => handleInputChange(index, event)}
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
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
            <button
              className="btn btn-primary mr-2"
              type="submit"
              // onSubmit={handleSubmit}
            >
              back
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
    </>
  );
};
export default Sizeadd;
