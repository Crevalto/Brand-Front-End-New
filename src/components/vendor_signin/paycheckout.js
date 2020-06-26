import React, { useState } from "react";
import {Button, Form } from "react-bootstrap";


function Paycheckout() {
  const [fields, setFields] = useState([{ value: null }]);

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }
// {/* <button type="button" onClick={() => handleAdd()}>
//         +
//       </button> */}
      // <button type="button" onClick={() => handleRemove(idx)}>
      //         X
      //       </button>
      // <input
      //         type="text"
      //         placeholder="Enter text"
      //         value={field.value || ""}
      //         onChange={e => handleChange(idx, e)}
      //         style={{width :"20%" , content :"center"}}
      //       />
  return (
  <div className = "center">
    <br></br><br/><br/><br></br><br/><br/><br></br><br/><br/><br></br><br/><br/><br></br><br/><br/>


      <Button variant="primary" onClick={() => handleAdd()} >Click to Add</Button>{' '}

      {fields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
            <div className="siz">
              <h6>Size</h6>
            <input list="browsers" name="browser" />
              <datalist id="browsers`">
                    <option value="free"/> 
                    <option value="5xs(26)"/>
                    <option value="4xs(28)"/>
                    <option value="3xs(30)"/>
                    <option value="2xs(34)"/>
                    <option value="xs(36)"/> 
                    <option value="s(38)"/>
                    <option value="m(40)"/>
                    <option value="l(42)"/>
                    <option value="xl(44)"/>
                    <option value="2xl(46)"/> 
                    <option value="3xl(48)"/>
                    <option value="4xl(50)"/>
                    <option value="5xl(52)"/>
                </datalist>
            </div><br/>
            <div className="cet">
            <h6 style={{ textAlign:"center"}}>Quantity</h6>
            <input class="form-control" style ={{width :"32%"}} type="text" placeholder="Enter Quantity"></input>
            <br/>
            <h6>Amount</h6>
            <input class="form-control" style ={{width :"32%" }} type="text" placeholder="Enter price"></input>
            <br/>
            </div>
            <Button variant="primary" onClick={() => handleRemove(idx)} >Remove</Button>{' '}
          </div>
        );
      })}
  </div>
  );
}

export default Paycheckout;