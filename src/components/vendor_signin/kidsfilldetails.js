import React, { Component } from "react";
import { Button, Modal, ThemeProvider } from "react-bootstrap";
import "./filldetails.css";
export default class kidsfillDetails extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
    this.onsubmit = this.onsubmit.bind(this);
    this.onprevious = this.onprevious.bind(this);
    this.state = {
      cattype: "",
    };
  }

  componentDidMount() {
    console.log(this.props.categtype);
    this.setState({
      cattype: this.props.categtype,
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onprevious() {
    this.props.onPreviousfilldetails();
  }

  handleCheckChange = (event) => {
    if (this.state[event.target.name]) {
      const temp = this.state[event.target.name];
      if (this.state[event.target.name].includes(event.target.value)) {
        const index = temp.indexOf(event.target.value);
        temp.splice(index, 1);
        this.setState({
          [event.target.name]: temp,
        });
      } else {
        temp.push(event.target.value);
        this.setState({
          [event.target.name]: temp,
        });
      }
    } else {
      this.setState({
        [event.target.name]: [event.target.value],
      });
    }
  };

  onsubmit() {
    let det = JSON.stringify(this.state);
    delete det["cattype"];
    console.log(det);
    this.props.onchangefilldetails(det);
  }
  render() {
    console.log(this.state);
    return (
      <div className="filldetails">
        <h1
          className="addProdTitle"
          style={{ paddingTop: "20px", textAlign: "center" }}
        >
          Fill {this.state.cattype} details
        </h1>

        <h6>Product Name</h6>
        <input
          type="text"
          class="form-control"
          aria-label="Default"
          name="productname"
          onChange={this.handleChange}
          placeholder="Enter product Name"
        />
        <h6>Product Description</h6>
        <textarea
          class="form-control"
          name="productdescription"
          onChange={this.handleChange}
          placeholder="Describe your product..."
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>

        <h6>Material</h6>
        <input
          class="form-control"
          list="material"
          name="material"
          onChange={this.handleChange}
          placeholder="Choose or Enter material "
        />
        <datalist id="material">
          <option value="Cotton" />
          <option value="Chiffon" />
          <option value="Denim" />
          <option value="Down" />
          <option value="Fleece" />
          <option value="Linen" />
          <option value="Rayon" />
          <option value="Silk" />
          <option value="Georgette" />
          <option value="Leather" />
          <option value="Lyocell" />
          <option value="Modal" />
          <option value="Net" />
          <option value="Rubber" />
          <option value="Satin" />
          <option value="Silk" />
          <option value="Synthetic" />
          <option value="Velvet" />
          <option value="Wool" />
          <option value="Jeans" />
          <option value="Hemp" />
          <option value="Beaded" />
          <option value="Fur" />
          <option value="Felt" />
          <option value="Faux Shearling" />
          <option value="Faux Fur" />
          <option value="Crochet" />
          <option value="Canvas" />
          <option value="Straw" />
          <option value="Velvet" />
          <option value="Jute" />
        </datalist>

        <h6>Occasion</h6>
        <label>
          <input
            type="checkbox"
            value="Evening"
            name="Occassion"
            onChange={this.handleCheckChange}
          />
          <span>Evening</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="Occassion"
            value="Ceremony"
            onChange={this.handleCheckChange}
          />
          <span>Ceremony</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="Occassion"
            value="Casual"
            onChange={this.handleCheckChange}
          />
          <span>Casual</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="Occassion"
            value="Business"
            onChange={this.handleCheckChange}
          />
          <span>Business</span>
        </label>

        {this.state.cattype === "tshirt" ? (
          // tshirt for men and kid boy
          <div>
            <h6> Choose NeckLine </h6>
            <input
              class="form-control"
              list="neckline"
              name="neckline"
              onChange={this.handleChange}
              style={{ width: "220px" }}
              placeholder="Choose or Enter Neckline"
            />
            <datalist id="neckline">
              <option value="V - neck" />
              <option value=" U - neck" />
              <option value="Round neck" />
              <option value="Turnleneck" />
              <option value="Sweetheart" />
              <option value="Square" />
              <option value="Shawl collar" />
              <option value="Polo" />
              <option value="Hooded" />
              <option value="Henley" />
              <option value="Half - zip" />
              <option value="Button front" />
              <option value="Boat neck" />
              <option value="Banded collar" />
              <option value="Asymmeyric" />
            </datalist>

            <h6>Sleeve Type </h6>
            <input
              class="form-control"
              list="sleeve"
              name="sleeve"
              onChange={this.handleChange}
              style={{ width: "220px" }}
              placeholder="Choose or Enter Sleeve"
            />
            <datalist id="sleeve">
              <option value="3/4 Sleeve" />
              <option value="Half Sleeve" />
              <option value="Long Sleeve" />
              <option value="short Sleeve" />
              <option value="Sleeveless" />
            </datalist>
            {/* <label>
              <input
                name="sleeve"
                value="3/4 Sleeve"
                onChange={this.handleChange}
                type="radio"
              />
              <span>3/4 Sleeve</span>
            </label> */}
            {/* <label>
              <input
                name="sleeve"
                value="Half Sleeve"
                onChange={this.handleChange}
                type="radio"
              />
              <span>Half Sleeve</span>
            </label> */}
            {/* <label>
              <input
                name="sleeve"
                value="Long Sleeve"
                onChange={this.handleChange}
                type="radio"
              />
              <span>Long Sleeve</span>
            </label> */}
            {/* <label>
              <input
                name="sleeve"
                value="Short Sleeve"
                onChange={this.handleChange}
                type="radio"
              />
              <span>Short Sleeve</span>
            </label> */}
            {/* <label>
              <input
                name="sleeve"
                value="Sleeveless"
                onChange={this.handleChange}
                type="radio"
              />
              <span>Sleeveless</span>
            </label> */}
          </div>
        ) : this.state.cattype === "shirt" ? (
          // shirt for men and kid boy
          <div>
            <h6>Shirt Type: </h6>
            <label>
              <input
                name="shirttype"
                value="Formal Shirt"
                onChange={this.handleChange}
                type="radio"
              />
              <span>Formal Shirt</span>
            </label>
            <label>
              <input
                name="shirttype"
                value="Casual Shirt"
                onChange={this.handleChange}
                type="radio"
              />
              <span>Casual Shirt</span>
            </label>

            <h6>Sleeve Type: </h6>
            <input
              class="form-control"
              list="sleeve"
              name="sleeve"
              onChange={this.handleChange}
              style={{ width: "220px" }}
              placeholder="Choose or Enter Sleeve"
            />
            <datalist id="sleeve">
              <option value="3/4 Sleeve" />
              <option value="Cap Sleeve" />
              <option value="Half Sleeve" />
              <option value="Long Sleeve" />
              <option value="short Sleeve" />
              <option value="Sleeveless" />
            </datalist>
            {/* <label>
              <input
                name="sleeve"
                value="Half Sleeve"
                onChange={this.handleChange}
                type="radio"
              />
              <span>Half Sleeve</span>
            </label> */}
            {/* <label>
              <input
                name="sleeve"
                value="Long Sleeve"
                onChange={this.handleChange}
                type="radio"
              />
              <span>Long Sleeve</span>
            </label> */}
          </div>
        ) : this.state.cattype === "track" ? (
          // only for men tracks
          <div>
            <h6>Trocer Type: </h6>
            <label>
              <input
                name="tracktype"
                value="Formal Trocer"
                onChange={this.handleChange}
                type="radio"
              />
              <span>Formal Trocer</span>
            </label>
            <label>
              <input
                name="tracktype"
                value="Casual Trocer"
                onChange={this.handleChange}
                type="radio"
              />
              <span>Casual Trocer</span>
            </label>
            <br />
            <h6> Choose Trocer Style:</h6>
            <input
              class="form-control"
              list="troserstyle"
              name="troserstyle"
              onChange={this.handleChange}
              style={{ width: "300px" }}
              placeholder="Choose or Enter closer Type "
            />
            <datalist id="troserstyle">
              <option value="Boot Cut" />
              <option value="Boyfriend" />
              <option value="Capri" />
              <option value="Carrot" />
              <option value="Chino" />
              <option value="Drop Crotch" />
              <option value="Dungarees" />
              <option value="Jeggings" />
              <option value="Pleat-Front" />
              <option value="Relaxed" />
              <option value="Skinny" />
              <option value="Slim" />
              <option value="Straight" />
              <option value="Tapered" />
              <option value="Cropped" />
            </datalist>
            <h6> Choose closer:</h6>
            <input
              class="form-control"
              list="closer"
              onChange={this.handleChange}
              name="closer"
              style={{ width: "300px" }}
              placeholder="Choose or Enter closer Type "
            />
            <datalist id="closer">
              <option value="Belt" />
              <option value="Buttoned" />
              <option value="Drawstring" />
              <option value="Elastic" />
              <option value="Hook" />
              <option value="zip" />
            </datalist>
          </div>
        ) : this.state.cattype === "shoes" ? (
          // shoes for men and kid boy
          <div>
            <h6>Shoes Type: </h6>
            <input
              class="form-control"
              list="shoe"
              onChange={this.handleChange}
              name="shoestype"
              style={{ width: "300px" }}
              placeholder="Choose or Enter Shoes Type "
            />
            <datalist id="shoe">
              <option value="Casual Shoes" />
              <option value="Sports & Outdoor Shoes" />
              <option value="Formal Shoes" />
              <option value="Sandals & Floaters" />
              <option value="Flip-Flops & Slippers" />
              <option value="Thong Sandals" />
              <option value="Ethnic Footwear" />
              <option value="Safety Shoes" />
            </datalist>

            {/* <label>
              <input
                name="shoetype"
                onChange={this.handleChange}
                type="radio"
                value=""
              />
              <span>Formal shoes</span>
            </label> */}
            {/* <label>
              <input
                name="shoetype"
                value="Casual Shoes"
                onChange={this.handleChange}
                type="radio"
              />
              <span>Casual Shoes</span>
            </label> */}
            {/* <label>
              <input
                name="shoetype"
                onChange={this.handleChange}
                type="radio"
                value="Sport Shoes"
              />
              <span>Sport Shoes</span>
            </label> */}
            {/* <h6>size</h6>
            <input
              type="number"
              onChange={this.handleChange}
              name="size"
              class="form-control"
              placeholder="Enter in inches"
            /> */}
          </div>
        ) : this.state.cattype === "belt" ? (
          // belt for all
          <div>
            {/* <h6>Length</h6>
            <input
              type="number"
              class="form-control"
              name="length"
              onChange={this.handleChange}
              placeholder="Enter Length in inches"
            />

            <h6>Width</h6>
            <input
              type="number"
              onChange={this.handleChange}
              name="width"
              class="form-control"
              placeholder="Enter Width in inches"
            /> */}
          </div>
        ) : this.state.cattype === "pants" ? (
          // pant for men
          <div>
            <h6>Pant Type: </h6>
            <label>
              <input
                name="panttype"
                onChange={this.handleChange}
                value="Formal Pants"
                type="radio"
              />
              <span>Formal Pants</span>
            </label>
            <label>
              <input
                name="panttype"
                value="Casual Pants"
                onChange={this.handleChange}
                type="radio"
              />
              <span>Casual Pants</span>
            </label>
            <br />
            <h6> Choose Pants Style:</h6>
            <input
              list="pantstyle"
              class="form-control"
              name="pantstyle"
              onChange={this.handleChange}
              style={{ width: "300px" }}
              placeholder="Choose or Enter closer Type "
            />
            <datalist id="pantstyle">
              <option value="Boot Cut" />
              <option value="Boyfriend" />
              <option value="Capri" />
              <option value="Carrot" />
              <option value="Chino" />
              <option value="Drop Crotch" />
              <option value="Dungarees" />
              <option value="Jeggings" />
              <option value="Pleat-Front" />
              <option value="Relaxed" />
              <option value="Skinny" />
              <option value="Slim" />
              <option value="Straight" />
              <option value="Tapered" />
              <option value="Cropped" />
            </datalist>
            <h6> Choose closer:</h6>
            <input
              list="closer"
              name="closer"
              onChange={this.handleChange}
              class="form-control"
              style={{ width: "300px" }}
              placeholder="Choose or Enter closer Type "
            />
            <datalist id="closer">
              <option value="Belt" />
              <option value="Buttoned" />
              <option value="Drawstring" />
              <option value="Elastic" />
              <option value="Hook" />
              <option value="zip" />
            </datalist>
          </div>
        ) : this.state.cattype === "kidtrouser" ? (
          // pant for kid boy and girl
          <div>
            <h6>Pant Type: </h6>
            <label>
              <input
                name="panttype"
                onChange={this.handleChange}
                value="Formal Pants"
                type="radio"
              />
              <span>Formal Pants</span>
            </label>
            <label>
              <input
                name="panttype"
                value="Casual Pants"
                onChange={this.handleChange}
                type="radio"
              />
              <span>Casual Pants</span>
            </label>
            <br />
            <h6> Choose Pants Style:</h6>
            <input
              list="trocerstyle"
              class="form-control"
              name="pantstyle"
              onChange={this.handleChange}
              style={{ width: "300px" }}
              placeholder="Choose or Enter closer Type "
            />
            <datalist id="pantstyle">
              <option value="Boot Cut" />
              <option value="Boyfriend" />
              <option value="Capri" />
              <option value="Carrot" />
              <option value="Chino" />
              <option value="Drop Crotch" />
              <option value="Dungarees" />
              <option value="Jeggings" />
              <option value="Pleat-Front" />
              <option value="Relaxed" />
              <option value="Skinny" />
              <option value="Slim" />
              <option value="Straight" />
              <option value="Tapered" />
              <option value="Cropped" />
            </datalist>
            <h6> Choose closer:</h6>
            <input
              list="closer"
              name="closer"
              onChange={this.handleChange}
              class="form-control"
              style={{ width: "300px" }}
              placeholder="Choose or Enter closer Type "
            />
            <datalist id="closer">
              <option value="Belt" />
              <option value="Buttoned" />
              <option value="Drawstring" />
              <option value="Elastic" />
              <option value="Hook" />
              <option value="zip" />
            </datalist>
            <h6> Choose troucer type:</h6>
            <input
              list="kidtrouser"
              name="kidtroucertype"
              onChange={this.handleChange}
              class="form-control"
              style={{ width: "300px" }}
              placeholder="Choose or Enter Trouser Type "
            />
            <datalist id="kidtrouser">
              <option value="3/4 Type" />
              <option value="Long Type" />
              <option value="short Type" />
            </datalist>
          </div>
          
        ) : this.state.cattype === "womenshoes" ? (
          // shoes for both girl and women
          <div>
            <h6>Shoes Type</h6>
            <input
              class="form-control"
              list="womenshoe"
              onChange={this.handleChange}
              name="shoestype"
              style={{ width: "300px" }}
              placeholder="Choose or Enter Shoes Type "
            />
            <datalist id="womenshoe">
              <option value="Ballet" />
              <option value="Flats" />
              <option value="Boots" />
              <option value="Casual Shoes" />
              <option value="Ethnic Footwates" />
              <option value="Fashion Footwears" />
              <option value="Fashion Sandals" />
              <option value="Fashion Slipper" />
              <option value="Flip-Flops & slipper" />
              <option value="Athletic & Outdoor Sandals" />
              <option value="Formal Shoes" />
              <option value="Pumps" />
              <option value="Sport & outdoor shoes" />
            </datalist>
            <h6>Shoe Closer</h6>
            <input list="shoescloser" name="shoescloser" />
            <datalist id="sheoscloser">
              <option value="Buckle" />
              <option value="Button" />
              <option value="Hook & Loop" />
              <option value="Lace-up" />
              <option value="Slip On" />
              <option value="speed Laces" />
              <option value="zip" />
            </datalist>
          </div>
        ) : this.state.cattype === "kidgirltops&tees" ? (
          // kids top and tees
          <div>
            <h6>Sleeve Type</h6>
            <input list="kidgirlstopsleeves" name="kidgirlstopsleeves" />
            <datalist id="kidgirlstopsleeves">
              <option value="3/4 Sleeve" />
              <option value="Cap Sleeve" />
              <option value="Half Sleeve" />
              <option value="Long Sleeve" />
              <option value="short Sleeve" />
              <option value="Sleeveless" />
            </datalist>
          </div>
        ) : this.state.cattype === "kidgirlskirtdress" ? (
          <div>
            <h6>Length</h6>
            <input list="length" name="kidgirllength" />
            <datalist id="length">
              <option value="Mini" />
              <option value="Knee-Long" />
              <option value="Midi" />
              <option value="Maxi" />
            </datalist>
          </div>
        ) : (
          <div></div>
        )}
        <Modal.Footer className="fill-modal-footer">
          <Button onClick={this.onprevious}>Previous</Button>
          <Button onClick={this.onsubmit}>Proceed</Button>
        </Modal.Footer>
      </div>
    );
  }
}
