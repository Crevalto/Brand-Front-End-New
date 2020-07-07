//pant for men and kid and women
import React, { useState, Fragment } from "react";
import { Modal, Table } from "react-bootstrap";
import "./sizeadd.css";

const Pant = (props) => {
  // inputfield is state and setinputfield id update component
  const [inputFields, setInputFields] = useState([
    {
      brand: "",
      color: "#000000",
      size: "",
      waist: "",
      inseamlength: "",
      rise: "",
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
      size: "",
      waist: "",
      inseamlength: "",
      rise: "",
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
    } else if (event.target.name === "waist") {
      values[index].waist = event.target.value;
    } else if (event.target.name === "inseamlength") {
      values[index].inseamlength = event.target.value;
    } else if (event.target.name === "rise") {
      values[index].sleeve = event.target.value;
    } else if (event.target.name === "length") {
      values[index].length = event.target.value;
    } else if (event.target.name === "amt") {
      values[index].amt = event.target.value;
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
                <Table>
                  <thead>
                    <tr>
                      <th>Waist</th>
                      <th>Inseamlength</th>
                      <th>Rise</th>
                      <th>Length</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          type="number"
                          id="waist"
                          name="waist"
                          placeholder="Enter waist in inches"
                          value={inputField.waist}
                          onChange={(event) => handleInputChange(index, event)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          id="inseamlength"
                          name="inseamlength"
                          placeholder="Enter inseamlength in inches"
                          value={inputField.inseamlength}
                          onChange={(event) => handleInputChange(index, event)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          id="rise"
                          name="rise"
                          placeholder="Enter rise in inches"
                          value={inputField.rise}
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
              onClick={back}
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
export default Pant;
