import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./Dropbox.css";
import { BsCloudUpload } from "react-icons/bs";
import { Button, Modal } from "react-bootstrap";
const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

function Previews(props) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      var temp = files;
      acceptedFiles.map((file) =>
        temp.push(
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      setFiles(temp);
    },
  });

  console.log(files);
  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} alt="Preview" />
      </div>
    </div>
  ));

  // useEffect(
  //   () => () => {
  //     // Make sure to revoke the data uris to avoid memory leaks
  //     files.forEach((file) => URL.revokeObjectURL(file.preview));
  //   },
  //   [files]
  // );

  const handleSubmit = () => {
    props.imageaddchange(files);
  };

  const back = () => {
    props.imageaddback();
  };

  return (
    <div>
      <Modal.Header>
        <h1 className="addProdTitle" stlye={{ color: "white" }}>
          Add product Images
        </h1>
      </Modal.Header>
      <section className="container">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p className="dropdes">
            <BsCloudUpload size={80} />
            <br />
            Drag '&' drop some files here, or click to select file
            <br />
            <br />
            <Button>Select File</Button>
          </p>
        </div>
        <aside style={thumbsContainer}>{thumbs}</aside>
      </section>

      <Modal.Footer className="fill-modal-footer">
        <div className="submit-button">
          <button className="btn btn-primary mr-2" type="submit" onClick={back}>
            Back
          </button>
          <button
            className="btn btn-success mr-2"
            type="submit"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </Modal.Footer>
    </div>
  );
}

export default Previews;
