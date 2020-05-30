import React, { Component } from "react";
import DropBox from "./Dropbox";
import { Jumbotron } from "react-bootstrap";
import "./signin.css";
import { MdAddAPhoto } from "react-icons/md";
class signin2 extends Component {
  render() {
    const thumbsContainer_cover = {
      display: "flex",
      border: "3px solid white",
      width: "100%",
      borderRadius: "10px",
      height: "400px",
      flexDirection: "row",
      flexWrap: "wrap",
    };

    const thumbsContainer_profile = {
      top: " 300px",
      left: "41%",
      position: "absolute",
      display: "flex",
      border: "3px solid white",
      width: "250px",
      height: "250px",
      background: "violet",
      borderRadius: "100%",
      flexDirection: "row",
      flexWrap: "wrap",
    };

    const thumb_cover = {
      display: "inline-flex",
      borderRadius: 2,
      marginBottom: 8,
      marginRight: 8,
      width: "100%",
      height: "100% ",
      padding: 4,
      boxSizing: "border-box",
      justifyContent: "center",
    };

    const thumb_profile = {
      display: "inline-flex",
      borderRadius: " 100%",
      width: "100%",
      height: "100%",
      padding: 4,
      boxSizing: "border-box",
      justifyContent: "center",
    };

    const img_cover = {
      display: "block",
      width: "auto",
      height: "100%",
    };

    const img_profile = {
      display: "block",
      width: "100%",
      borderRadius: "100%",
      height: "100%",
    };

    console.log(JSON.parse(localStorage.getItem("cover")));
    return (
      <div className="sign">
        <Jumbotron className="cover">
          <DropBox
            imgname="cover"
            thumb={thumb_cover}
            thumbsContainer={thumbsContainer_cover}
            img={img_cover}
            message={
              <h2
                style={{
                  color: "white",
                  width: "100%",
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                <MdAddAPhoto />
                <br />
                Add Cover Photo
              </h2>
            }
          />
        </Jumbotron>
        <DropBox
          imgname="profile"
          thumb={thumb_profile}
          thumbsContainer={thumbsContainer_profile}
          img={img_profile}
        />
        <div className="details">
          <h2>Google</h2>
        </div>
      </div>
    );
  }
}
export default signin2;
