import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import "./filldetails.css";
export default class fillDetails extends Component {
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

        {this.state.cattype === "Men-tshirt" ||
        this.state.cattype === "Boys - tshirt" ||
        this.state.cattype === "Women - tshirt" ? (
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
            </label>
            <label>
              <input
                name="sleeve"
                value="Half Sleeve"
                onChange={this.handleChange}
                type="radio"
              />
              <span>Half Sleeve</span>
            </label>
            <label>
              <input
                name="sleeve"
                value="Long Sleeve"
                onChange={this.handleChange}
                type="radio"
              />
              <span>Long Sleeve</span>
            </label>
            <label>
              <input
                name="sleeve"
                value="Short Sleeve"
                onChange={this.handleChange}
                type="radio"
              />
              <span>Short Sleeve</span>
            </label>
            <label>
              <input
                name="sleeve"
                value="Sleeveless"
                onChange={this.handleChange}
                type="radio"
              />
              <span>Sleeveless</span>
            </label> */}
          </div>
        ) : this.state.cattype === "Men-shirt" ? (
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
            </label>
            <label>
              <input
                name="sleeve"
                value="Long Sleeve"
                onChange={this.handleChange}
                type="radio"
              />
              <span>Long Sleeve</span>
            </label> */}
          </div>
        ) : this.state.cattype === "Men-track" ? (
          <div>
            <h6>Pant's</h6>
            <input
              list="menboypant"
              id="mentroucer"
              name="mentroucer"
              onChange={this.handleChange}
              placeholder="Enter or choose Pants"
            />
            <datalist id="menboypantpant">
              <option value="sports" />
              <option value="harem pants" />
              <option value="three-forth" />
              <option value="jeans" />
              <option value="tights" />
              <option value="track pants" />
              <option value="cargos" />
              <option value="trousers" />
            </datalist>
            <h6>Pant Pattern</h6>
            <input
              list="pantpattern"
              name="pantpattern"
              onChange={this.handleChange}
              placeholder="Enter or choose Pant pattern"
            />
            <datalist id="pantpattern">
              <option value="Solid" />
              <option value="Self Design" />
              <option value="Printed" />
              <option value="Checkered" />
              <option value="Washed" />
              <option value="Striped" />
              <option value="Polka Print" />
              <option value="Paisley" />
              <option value="Floral Print" />
              <option value="Color Block" />
              <option value="Distressed" />
              <option value="Graphic Print" />
              <option value="Geometric Print" />
              <option value="Embroidered" />
            </datalist>
            <h6>Pant Type</h6>
            <input
              list="panttype"
              name="panttype"
              onChange={this.handleChange}
              placeholder="Enter or choose Pant type"
            />
            <datalist id="panttype">
              <option value="Sports Shorts" />
              <option value="Running Shorts" />
              <option value="Regular Shorts" />
              <option value="Night Shorts" />
              <option value="Hotpants" />
              <option value="Gym Shorts" />
              <option value="Denim Shorts" />
              <option value="Cycling Shorts" />
              <option value="Culotte Shorts" />
              <option value="Compression Shorts" />
              <option value="Basic Shorts" />
              <option value="Swim Shorts" />
              <option value="Chino Shorts" />
              <option value="High Waist Shorts" />
              <option value="Beach Shorts" />
              <option value="Dolphin Shorts" />
              <option value="Bermuda Shorts" />
              <option value="Formal" />
              <option value="casual" />
            </datalist>
            {/*<h6>Trocer Type: </h6>
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
            </label>*/}

            <br />
            <h6> Choose Trocer Style:</h6>
            <input
              class="form-control"
              list="trocerstyle"
              name="trocerstyle"
              onChange={this.handleChange}
              style={{ width: "300px" }}
              placeholder="Choose or Enter closer Type "
            />
            <datalist id="trocerstyle">
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
            <h6> Choose Closer:</h6>
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
        ) : this.state.cattype === "Men-tie" ||
          this.state.cattype === "Boys-tie" ? (
          <div>
            <h6>Tie Type: </h6>
            <label>
              <input
                name="sleeve"
                onChange={this.handleChange}
                value="Neck Tie"
                type="radio"
              />
              <span>Neck Tie</span>
            </label>
            <label>
              <input
                name="sleeve"
                onChange={this.handleChange}
                value="Bow Tie"
                type="radio"
              />
              <span>Bow Tie</span>
            </label>
          </div>
        ) : this.state.cattype === "Men-shoes" ||
          this.state.cattype === "Boys - shoes" ? (
          <div>
            <h6>Shoes Type: </h6>
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
            </label>
            <label>
              <input
                name="shoetype"
                value="Casual Shoes"
                onChange={this.handleChange}
                type="radio"
              />
              <span>Casual Shoes</span>
            </label>
            <label>
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
        ) : this.state.cattype === "Men-belt" ? (
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
        ) : this.state.cattype === "Men-pants" ||
          this.state.cattype === "Boys - pants" ||
          this.state.cattype === "Boys - track " ? (
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
            <h6> Choose Closer:</h6>
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
        ) : this.state.cattype === "Girls - slippers" ||
          this.state.cattype === "Women - slipper" ? (
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
            <input
              list="shoescloser"
              name="shoescloser"
              onChange={this.handleChange}
              placeholder="Enter or choose Shoe Closer"
            />
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
        ) : this.state.cattype === "Girls - frock" ? (
          <div>
            <h6>Length</h6>
            <input
              list="skirtlength"
              name="frocklength"
              onChange={this.handleChange}
              placeholder="Enter or choose length"
            />
            <datalist id="skirtlength">
              <option value="Midi/Below Knee Length" />
              <option value="Maxi/Full Length" />
              <option value="" />
              <option value="Mini/Short Length" />
              <option value="Below Knee/Midi" />
              <option value="Mid-calf Length" />
              <option value="Above Knee Length" />
              <option value="Knee Length" />
              <option value="Maxi/Long" />
              <option value="Full Length" />
              <option value="Mini/Short" />
              <option value="" />
            </datalist>
            <h6>Skirt Type</h6>
            <input
              list="skirttype"
              name="skirttype"
              onChange={this.handleChange}
              placeholder="Enter or choose Skirt Type"
            />
            <datalist id="skirttype">
              <option value="Bubble" />
              <option value="Trumpet" />
              <option value="Divided" />
              <option value="Tulip" />
              <option value="Peplum" />
              <option value="Tiered" />
              <option value="A-line" />
              <option value="Asymetric" />
              <option value="Broomstick" />
              <option value="Flared" />
              <option value="Gathered" />
              <option value="Layered" />
              <option value="Pencil" />
              <option value="Pleated" />
              <option value="Regular" />
              <option value="Skorts" />
              <option value="Straight" />
              <option value="Tube" />
              <option value="Wrap Around" />
            </datalist>
            <h6>Skirt pattern</h6>
            <input
              list="shirtpattern"
              name="shirtpattern"
              onChange={this.handleChange}
              placeholder="Enter or choose Skirt Pattern "
            />
            <datalist id="shirtpattern">
              <option value="Argyle" />
              <option value="Woven" />
              <option value=" Striped " />
              <option value="Solid" />
              <option value=" Self Design" />
              <option value=" Printed" />
              <option value="Polka Print" />
              <option value="Paisley" />
              <option value="Graphic Print  " />
              <option value="Geometric Print" />
              <option value="Floral Print" />
              <option value="Checkered" />
              <option value="Animal Print" />
              <option value="Abstract " />
              <option value="Washed " />
              <option value=" Embroidered " />
              <option value="Embellished" />
              <option value="Chevron/Zig Zag " />
              <option value="Houndstooth " />
              <option value="Applique" />
            </datalist>
            <h6>Fit Type</h6>
            <input
              list="skirtfittype"
              name="skirtfittype"
              onChange={this.handleChange}
              placeholder="Enter or choose Fit Type"
            />
            <datalist id="skirtfittype">
              <option value="Regular" />
              <option value="loose" />
            </datalist>
          </div>
        ) : this.state.cattype === "Girls - chudithar" ||
          this.state.cattype === "Women - chudithar" ? (
          <div>
            <h6>Chudithar Bottoms Style:</h6>
            <input
              list="chuditharbottomsstyle"
              name="chuditharbottomsstyle"
              onChange={this.handleChange}
              placeholder="Enter or choose Bottom Style"
            />
            <datalist id="chuditharbottomsstyle">
              <option value="Chudidar" />
              <option value="Legging" />
              <option value="Patialas" />
              <option value="Salwar" />
            </datalist>
            <h6>Chudithar Sleeve Type</h6>
            <input
              list="Chuditharsleeves"
              name="Chuditharsleeves"
              onChange={this.handleChange}
              placeholder="Enter or choose Chudithar Sleeve Type"
            />
            <datalist id="Chuditharsleeves">
              <option value="3/4 Sleeve" />
              <option value="Cap Sleeve" />
              <option value="Half Sleeve" />
              <option value="Long Sleeve" />
              <option value="short Sleeve" />
              <option value="Sleeveless" />
            </datalist>
            <h6> Chudithar Choose NeckLine </h6>
            <input
              class="form-control"
              list="chuditharneckline"
              name="chuditharneckline"
              onChange={this.handleChange}
              style={{ width: "220px" }}
              placeholder="Choose or Enter Neckline"
            />
            <datalist id="chuditharneckline">
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
            <h6></h6>
            <input
              list="chudiarstyle"
              id="chidirstyle"
              name="chidirstyle"
              onChange={this.handleChange}
              placeholder="Enter or choose Chudir Style"
            />
            <datalist id="chudiastyle">
              <option value="Applique, Thread Work, Button" />
              <option value="Applique, Thread Work, Lace" />
              <option value="Beads & Stones, Applique " />
              <option value="Beads & Stones, Button Loop" />
              <option value="Beads & Stones, Button, Zari" />
              <option value="Beads & Stones, Mirror Work, Gotta Patti" />
            </datalist>
          </div>
        ) : this.state.cattype === "Girls - topsntees" ||
          this.state.cattype === "Women - topsntees" ? (
          <div>
            <h6>Sleeve Type</h6>
            <input
              list="kidgirlstopsleeves"
              name="kidgirlstopsleeves"
              onChange={this.handleChange}
              placeholder="Enter or Choose Sleeve Type"
            />
            <datalist id="kidgirlstopsleeves">
              <option value="3/4 Sleeve" />
              <option value="Cap Sleeve" />
              <option value="Half Sleeve" />
              <option value="Long Sleeve" />
              <option value="short Sleeve" />
              <option value="Sleeveless" />
            </datalist>
          </div>
        ) : this.state.cattype === "Girls - pants" ||
          this.state.cattype === "Women - pants" ? (
          <div>
            <h6>Pant's</h6>
            <input
              list="girlpant"
              id="womengirltroucer"
              name="womengirltroucer"
              onChange={this.handleChange}
              placeholder="Enter or choose Pants"
            />
            <datalist id="girlpant">
              <option value="shorts" />
              <option value="harem pants" />
              <option value="jeggings" />
              <option value="three-forth" />
              <option value="jeans" />
              <option value="tights" />
              <option value="track pants" />
              <option value="capris" />
              <option value="cargos" />
              <option value="trousers" />
            </datalist>
            <h6>Pant Pattern</h6>
            <input
              list="pantpattern"
              name="pantpattern"
              onChange={this.handleChange}
              placeholder="Enter or choose Pant pattern"
            />
            <datalist id="pantpattern">
              <option value="Solid" />
              <option value="Self Design" />
              <option value="Printed" />
              <option value="Checkered" />
              <option value="Washed" />
              <option value="Striped" />
              <option value="Polka Print" />
              <option value="Paisley" />
              <option value="Floral Print" />
              <option value="Color Block" />
              <option value="Distressed" />
              <option value="Graphic Print" />
              <option value="Geometric Print" />
              <option value="Embroidered" />
            </datalist>
            <h6>Pant Type</h6>
            <input
              list="panttype"
              name="panttype"
              onChange={this.handleChange}
              placeholder="Enter or choose Pant type"
            />
            <datalist id="panttype">
              <option value="Sports Shorts" />
              <option value="Running Shorts" />
              <option value="Regular Shorts" />
              <option value="Night Shorts" />
              <option value="Hotpants" />
              <option value="Gym Shorts" />
              <option value="Denim Shorts" />
              <option value="Cycling Shorts" />
              <option value="Culotte Shorts" />
              <option value="Compression Shorts" />
              <option value="Basic Shorts" />
              <option value="Swim Shorts" />
              <option value="Chino Shorts" />
              <option value="High Waist Shorts" />
              <option value="Beach Shorts" />
              <option value="Dolphin Shorts" />
              <option value="Bermuda Shorts" />
              <option value="Formal" />
              <option value="casual" />
            </datalist>
          </div>
        ) : this.state.cattype === "Girls - sarees" ||
          this.state.cattype === "Women - sarees" ? (
          <div>
            <h6>Saree Type</h6>
            <input
              list="sareetype"
              name="sareetype"
              onChange={this.handleChange}
              placeholder="Enter or choose Saree Type"
            />
            <datalist id="sareetype">
              <option value="Khandua" />
              <option value="Konrad" />
              <option value="Puttapaka" />
              <option value="Bomkai" />
              <option value="Rasipuram" />
              <option value="Mattha" />
              <option value="Arani Pattu" />
              <option value="Assam Silk" />
              <option value="Balarampuram" />
              <option value="Baluchari" />
              <option value="Banarasi" />
              <option value="Bandhani" />
              <option value="Bandhej" />
              <option value="Berhampuri" />
              <option value="Bhagalpuri" />
              <option value="Bollywood" />
              <option value="Chanderi" />
              <option value="Chettinadu" />
              <option value="Chinnalapattu" />
              <option value="Coimbatore" />
              <option value="Daily Wear" />
              <option value="Dhaniakhali" />
              <option value="Dharmavaram" />
              <option value="Fashion" />
              <option value="Gadwal" />
              <option value="Gajee" />
              <option value="Ganga Jamuna" />
              <option value="Garad" />
              <option value="Guntur" />
              <option value="Hand Batik" />
              <option value="Handloom" />
              <option value="Ikkat" />
              <option value="Ilkal" />
              <option value="Jamdani" />
              <option value="Kalamkari" />
              <option value="Kanjivaram" />
              <option value="Kantha" />
              <option value="Kasavu" />
              <option value="Katha" />
              <option value="Kerala" />
              <option value="Kinkhab" />
              <option value="Kosa" />
              <option value="Kota Doria" />
              <option value="Kotki" />
              <option value="Kumbakonam" />
              <option value="Leheria" />
              <option value="Lucknow Chikankari" />
              <option value="Lugade" />
              <option value="Madhubani" />
              <option value="Madurai" />
              <option value="Maheshwari" />
              <option value="Mangalagiri" />
              <option value="Manipuri" />
              <option value="Meghalaya" />
              <option value="Mekhela Chador" />
              <option value="Molakalmuru" />
              <option value="Mooga" />
              <option value="Mundum Neriyathum" />
              <option value="Murshidabad" />
              <option value="Muslin" />
              <option value="Mysore" />
              <option value="Narayanpet" />
              <option value="Paithani" />
              <option value="Patola" />
              <option value="Phulia" />
              <option value="Phulkari" />
              <option value="Venkatagiri" />
            </datalist>
            <h6>Saree Pattern</h6>
            <input
              list="sareepattern"
              name="sareepattern"
              onChange={this.handleChange}
              placeholder="Enter or choose Saree Pattern"
            />
            <datalist id="sareepattern">
              <option value="Ombre" />
              <option value="Polka Print" />
              <option value="Temple Border" />
              <option value="Graphic Print" />
              <option value="Hand Painted" />
              <option value="Plain" />
              <option value="Animal Print" />
              <option value="Applique" />
              <option value="Checkered" />
              <option value="Color Block" />
              <option value="Digital Print" />
              <option value="Dyed" />
              <option value="Embellished" />
              <option value="Embroidered" />
              <option value="Floral Print" />
              <option value="Geometric Print" />
              <option value="Paisley" />
              <option value="Printed" />
              <option value="Self Design" />
              <option value="Solid" />
              <option value="Striped" />
              <option value="Woven" />
            </datalist>
            <h6>Saree Theme</h6>
            <input
              list="sareetheme"
              name="sareetheme"
              onChange={this.handleChange}
              placeholder="Enter or choose Saree Theme"
            />
            <datalist id="sareetheme">
              <option value="Bold Borders" />
              <option value="Bridal Sarees" />
              <option value="Classic Solids" />
              <option value="Expert Pick - Silk Saree for Pooja" />
              <option value="Partywear" />
              <option value="Saree with Cape" />
              <option value="Banarasi Sarees" />
              <option value="Banarasi Silk" />
              <option value="Bandhej" />
              <option value="Bling Cocktail Saree" />
              <option value="Block Print" />
              <option value="Border Prints" />
              <option value="Bright Banarasi" />
              <option value="Bright Color Saree" />
              <option value="Bright Color with Embroidery" />
              <option value="Brocade" />
              <option value="Brocade & Foil Print Sarees" />
              <option value="Celeb Style - Pink/Peach Sari with Gold Border" />
              <option value="Checkered Sarees" />
              <option value="Classic Cotton Sarees" />
              <option value="Cocktail Sarees" />
              <option value="Contemporary" />
              <option value="Contrast Colored Borders" />
              <option value="Dailywear" />
              <option value="Dark Florals" />
              <option value="Daywear Cotton Sarees" />
              <option value="Daywear Pastel Sarees" />
              <option value="Designer Sarees" />
              <option value="Digital Prints" />
              <option value="Embellished" />
              <option value="Embellished Borders" />
              <option value="Embroidered Sarees" />
              <option value="Everyday Casual Look" />
              <option value="Expert Pick - Embroidered Chiffon Sarees" />
              <option value="Fancy Border" />
              <option value="Festive Florals" />
              <option value="Festive Look" />
              <option value="Floral" />
              <option value="Floral Embroideries" />
              <option value="Floral Prints" />
              <option value="Foil Prints" />
              <option value="Geometric Prints" />
              <option value="Gold Base Saree" />
              <option value="Gold Border" />
              <option value="Gold Detail" />
              <option value="Gold Print" />
              <option value="Gold Thin Border Saree" />
              <option value="Green Silk Sarees" />
              <option value="Half & Half Embroidered Sarees" />
              <option value="Half and Half Sarees" />
              <option value="Heavy Border Silk Sarees" />
              <option value="Heavy Work Sarees" />
              <option value="Ikat" />
              <option value="Indie Tales" />
              <option value="Indigo Sarees" />
              <option value="Ivory & Gold" />
              <option value="Jacquard" />
              <option value="Kanjeevaram Silk Sarees" />
              <option value="Lace" />
              <option value="Lace Net Saree" />
              <option value="Lace Sarees" />
              <option value="Lehenga Style Sarees" />
              <option value="Leheriya" />
              <option value="Metallic Shimmer" />
              <option value="Monochrome Prints" />
              <option value="Motif Sarees" />
              <option value="Mustard Silk Sarees" />
              <option value="Net Sarees - Party Look" />
              <option value="Nude Shades" />
              <option value="Office Look" />
              <option value="Ombre" />
              <option value="Paisley" />
              <option value="Pallu Highlight" />
              <option value="Pastel Florals" />
              <option value="Patalo Sarees" />
              <option value="Placement Prints & Patterns" />
              <option value="Pop" />
              <option value="Printed Chiffon" />
              <option value="Printed Georgette" />
              <option value="Printed Half & Half" />
              <option value="Quirky Prints" />
              <option value="Rainbow Colors" />
              <option value="Red & Gold" />
              <option value="Red Sarees" />
              <option value="Red Silk Sarees" />
              <option value="Ruffle Sarees" />
              <option value="Saree with belt" />
              <option value="Sheen & Sheer Sarees" />
              <option value="Sheer Net Sarees" />
              <option value="Silk" />
              <option value="Silk Border Sarees" />
              <option value="Silk Work Saree" />
              <option value="Solid Pastels" />
              <option value="Solid Saree with Border" />
              <option value="Spring Floral Print" />
              <option value="Statement Pallu" />
              <option value="Stripes & Checks" />
              <option value="Stylish Stripes" />
              <option value="Summer Love - Cotton Sarees" />
              <option value="Thick Border" />
              <option value="Thread Embroidery" />
              <option value="Tie & Dye" />
              <option value="Touch of Gold" />
              <option value="Traditional Silk Sarees" />
              <option value="Vog - Solid Bordered Saree" />
              <option value="Workwear" />
            </datalist>
            <h6>Blouse Included</h6>
            <input
              type="checkbox"
              name="blouse-includes"
              onChange={this.handleChange}
              value="blouse-included"
            >
              <p>without Blouse Piece</p>
            </input>
          </div>
        ) : this.state.cattype === "Baby - Gift - Box" ? (
          <div>
            <h6>List of Item</h6>
            <input
              type="text"
              name="baby-gift-box-list"
              placeholder="Enter list in bundle"
            />
            <h6>Total Number of Things</h6>
            <input
              type="number"
              name="totnumberofthing"
              onChange={this.handleChange}
              placeholder="enter total number of thing in package"
            />
          </div>
        ) : this.state.cattype === "Boys - Coat" ? (
          <div>
            <h6>Pattern</h6>
            <input list="coatpattern" id="coatpattern" name="coatpattern" />
            <datalist id="coatpattern">
              <option value="Printed" />
              <option value="Polka Print" />
              <option value="Striped" />
              <option value="Textured" />
              <option value="Checkered" />
              <option value="Self Design" />
              <option value="Solid" />
            </datalist>
          </div>
        ) : this.state.cattype === "Baby - Suit" ? (
          <div></div>
        ) : this.state.cattype === "Baby - Frock" ? (
          <div></div>
        ) : this.state.cattype === "Baby - Shoes" ? (
          <div></div>
        ) : this.state.cattype === "Baby - pants" ? (
          <div></div>
        ) : this.state.cattype === "Baby - tshirt" ? (
          <div></div>
        ) : this.state.cattype === "Baby - trouser" ? (
          <div></div>
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
