import React, { useState, Fragment } from "react";

const Shoes = () => {
  // this will create
  const [inputFields, setInputFields] = useState([
    { color: "", size: "", quantity: "", amt: "" },
  ]);

  const handleAddFields = () => {
    const values = [...inputFields];

    values.push({ color: "", size: "", quantity: "", amt: "" });
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
                <label htmlFor="size">size</label>
                <input
                  list="bro"
                  name="size"
                  className="form-control"
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
      </form>
    </>
  );
};
export default Shoes;
