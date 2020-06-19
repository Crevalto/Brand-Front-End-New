// tie,belt

import React, { useState, Fragment } from "react";

const Tie = () => {
  const [inputFields, setInputFields] = useState([
    { color: "", width: "", length: "", quantity: "", amt: "" },
  ]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ color: "", width: "", length: "", quantity: "", amt: "" });
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
        <div className="form-row">
        <button
                  className="btn btn-link"
                  type="button"
                  onClick={() => handleAddFields()}
                >
                  Add
                </button>
          {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
              <div className="form-group col-sm-6">
                <label htmlFor="color">choose Color</label>
                <input
                  type="color"
                  className="form-control"
                  id="color"
                  name="color"
                  value={inputField.color}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div>
              <div className="form-group col-sm-4">
                <lable>size</lable>
                <br />
                <label htmlFor="width">width</label>
                <input
                  type="number"
                  className="form-control"
                  id="width"
                  name="width"
                  value={inputField.width}
                  onChange={(event) => handleInputChange(index, event)}
                />

                <label htmlFor="length">length</label>
                <input
                  type="number"
                  className="form-control"
                  id="length"
                  name="length"
                  value={inputField.length}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div>
              <div className="form-group col-sm-4">
                <label htmlFor="quantity">Quantity</label>
                <input
                  type="number"
                  className="form-control"
                  id="quantity"
                  name="quantity"
                  placeholder="Enter quantity of product"
                  value={inputField.hello}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div>
              <div className="form-group col-sm-4">
                <label htmlFor="amt">Amount</label>
                <input
                  type="number"
                  className="form-control"
                  id="amt"
                  name="amt"
                  placeholder="Enter single product price "
                  value={inputField.hello}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div>
              <div className="form-group col-sm-2">
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={() => handleRemoveFields(index)}
                >
                  Remove
                </button>
                
              </div>
            </Fragment>
          ))}
        </div>
        <div className="submit-button">
          <button
            className="btn btn-primary mr-2"
            type="submit"
            onSubmit={handleSubmit}
          >
            Save
          </button>
        </div>
        <br />
      </form>
    </>
  );
};
export default Tie;
