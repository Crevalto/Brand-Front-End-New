import React from "react";
import Pie from "react-chartjs-2";
import { Card } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import "./dash.css";
class Dash extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "",
    };
  }

  componentDidMount() {
    const url = "https://apicrevalto.herokuapp.com/v1/brand/getcategorysales";
    fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .catch((error) =>
        console.error("Show me error that cannot be specify", error)
      )
      .then((response) => {
        if (response.status === true) {
          this.setState(
            {
              data: {
                labels: response.data.categories,
                datasets: [
                  {
                    data: response.data.values,
                    backgroundColor: ["#8dace7", "#71deb9", "#ef869e"],
                    hoverBackgroundColor: ["#8dace7", "#71deb9", "#ef869e"],
                  },
                ],
              },
            },
            () => {
              console.log(this.state);
            }
          );
        }
      });
  }

  render() {
    return this.state.data !== "" ? (
      <div>
        <h2 style={{ color: this.state.brandBackgroundGround }}>
          {localStorage.getItem("compname")}
        </h2>
        <hr />

        <Row className="pad">
          <Col lg="3"></Col>
          <Col lg="6" style={{ paddingBottom: "2rem" }}>
            <Card className="main-card mb-3 designs">
              <Card.Body>
                <Card.Title className="designss">Barchart</Card.Title>
                <Pie dataKey="value" data={this.state.data} />
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3"></Col>
        </Row>
      </div>
    ) : (
      <div></div>
    );
  }
}
export default Dash;
