import React,{Component} from 'react'
class Dashprofile extends Component{
  constructor() {
    super();
    this.changeEdit = this.changeEdit.bind(this);
    this.state = {
      edits: true,
      services: [],
      regno: "",
      cinno: "",
      brandBackgroundGround: "",
      brandColor: "",
      initstate: false,
    };
  }
  changeEdit() {
    this.setState({ edits: false });
  }

  componentDidMount() {
    const url =
      "https://crevaltobkend.herokuapp.com/brand/users/profile/" +
      localStorage.getItem("compname");
    var bearer = "Bearer" + localStorage.getItem("token");
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: bearer,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((jsonData) => {
        this.setState({ services: jsonData });
        console.log(this.state.services);
        this.setState({ cinno: this.state.services.bid.cinNo });
        this.setState({ regno: this.state.services.bid.regNo });
        this.setState({ regno: this.state.services.bid.regNo });
        this.setState({
          brandBackgroundGround: this.state.services.brandAssets.brandColor
            .bgColor,
        });
        this.setState({
          brandColor: this.state.services.brandAssets.brandColor.fgColor,
        });
      })
      .catch((error) => {
        // handle your errors here
        console.error(error);
      });
  }
  
    render(){
        return(<div>
         
          <div class="row">
            <div class="col-md-4">
              <div class="inner_cards_dash">
                <div
                  class="inner_card_dash_header"
                  style={{ background: this.state.brandBackgroundGround }}
                >
                  <h6>Email-id</h6>
                </div>
                <div class="inner_card_dash_body">
                  <input
                    type="text"
                    defaultValue={this.state.services.bemail}
                    disabled={this.state.edits}
                  />
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="inner_cards_dash">
                <div
                  class="inner_card_dash_header"
                  style={{ background: this.state.brandBackgroundGround }}
                >
                  <h6>Phone no</h6>
                </div>
                <div class="inner_card_dash_body">
                  <input
                    type="number"
                    defaultValue={this.state.services.phn_no}
                    disabled={this.state.edits}
                  />
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="inner_cards_dash">
                <div
                  class="inner_card_dash_header"
                  style={{ background: this.state.brandBackgroundGround }}
                >
                  <h6>Cin number</h6>
                </div>
                <div class="inner_card_dash_body">
                  <input
                    type="number"
                    defaultValue={this.state.cinno}
                    disabled={this.state.edits}
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="inner_cards_dash">
                <div
                  class="inner_card_dash_header"
                  style={{ background: this.state.brandBackgroundGround }}
                >
                  <h6>Reg number</h6>
                </div>
                <div class="inner_card_dash_body">
                  <input
                    type="number"
                    defaultValue={this.state.regno}
                    disabled={this.state.edits}
                  />
                </div>
              </div>
            </div>
              <div class="col-md-4">
              <div class="inner_cards_dash">
                <div
                  class="inner_card_dash_header"
                  style={{ background: this.state.brandBackgroundGround }}
                >
                  <h6>Companies Assisted</h6>
                </div>
                <div class="inner_card_dash_body">
                  <input
                    type="number"
                    value="16"
                  />
                </div>
              </div>
            </div>
          
            <div class="col-md-4">
              <div class="inner_cards_dash">
                <div
                  class="inner_card_dash_header"
                  style={{ background: this.state.brandBackgroundGround }}
                >
                <h6>Address</h6>
                </div>
                <div class="inner_card_dash_body">
                  <input
                    type="text"
                    defaultValue={this.state.services.baddress}
                    disabled={this.state.edits}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-md-4">
              <div class="inner_cards_dash twitter">
                <div class="inner_card_dash_header">
                  <h6>Twitter</h6>
                </div>
                <div class="inner_card_dash_body">
                  <input type="text" defaultValue="" />
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="inner_cards_dash youtube">
                <div class="inner_card_dash_header">
                  <h6>Youtube</h6>
                </div>
                <div class="inner_card_dash_body">
                  <input type="text" defaultValue="" />
                </div>
              </div>
            </div>
         </div>
        </div>
          
      
    
        );
    }
}
export default Dashprofile