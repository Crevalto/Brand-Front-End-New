import React, { Component } from "react";
import "./mendet.css";

class mesdet extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h4>Occasion </h4>
        <label>
          &emsp;
          <input type="checkbox" />
          &emsp;
          <span>Evening</span>
        </label>
        &emsp;&emsp;
        <label>
          <input type="checkbox" />
          &emsp;
          <span>Ceremony</span>
        </label>
        &emsp;&emsp;
        <label>
          <input type="checkbox" />
          &emsp;
          <span>Casual</span>
        </label>
        &emsp;&emsp;
        <label>
          <input type="checkbox" />
          &emsp;
          <span>Business</span>
        </label>
        <br />
        <br />
        <br />
        <br />
        <h4>Choose Material:</h4>
        <form action="#" style={{ width: "15%" }}>
          <input list="material" name="material" />
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
        </form>
        <form>
          <h4>Choose cloth fit:</h4>
          <label>
            &emsp;
            <input class="with-gap" name="group3" type="radio" checked />
            <span>Loose Fit</span>
          </label>
          <label>
            &emsp;
            <input class="with-gap" name="group3" type="radio" checked />
            <span> Regular Fit </span>
          </label>
          <label>
            &emsp;
            <input class="with-gap" name="group3" type="radio" checked />
            <span>Slim Fit</span>
          </label>
        </form>
        <div>
          <h4>Choose cloth color :</h4>
          <input type="color" id="clothcolor" value="#FFFFFF" />
        </div>
        <form>
          <h4>Choose cloth type:</h4>
          <label>
            <input class="with-gap" name="group3" type="radio" checked />
            <span>T-shirt</span>
          </label>
          <br />
          <label>
            <input class="with-gap" name="group3" type="radio" checked />
            <span> shirt </span>
          </label>
          <br />
          <h5>pants-</h5>
          <label>
            &emsp;
            <input class="with-gap" name="group3" type="radio" checked />
            <span>Casual pants</span>
          </label>
          <br />
          <label>
            &emsp;
            <input class="with-gap" name="group3" type="radio" checked />
            <span>formal pants</span>
          </label>
          <br />
          <h5>Suits & Blazers</h5>
          <label>
            &emsp;
            <input class="with-gap" name="group3" type="radio" checked />
            <span>suit</span>
          </label>
          <br />
          <label>
            &emsp;
            <input class="with-gap" name="group3" type="radio" checked />
            <span>blazers</span>
          </label>
          <br />
          <label>
            &emsp;
            <input class="with-gap" name="group3" type="radio" checked />
            <span>waistcoats</span>
          </label>
          <br />
        </form>
        <form action="/action_page.php" style={{ width: "20%" }}>
          <input list="browsers" name="browser" />
          <datalist id="browsers">
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
        </form>
      </div>
    );
  }
}

export default mesdet;
