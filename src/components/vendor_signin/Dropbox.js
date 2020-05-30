import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Modal, Button } from "react-bootstrap";
import "./Dropbox.css";
import { BsCloudUpload } from "react-icons/bs";

const thumbsContainerBefore = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

function Dropbox(props) {
  const [files, setFiles] = useState([]);
  console.log(files);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      localStorage.setItem(
        props.imgname,
        JSON.stringify(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        )
      );
      setShow(false);
    },
  });

  const thumbs = files.map((file) => (
    <div style={props.thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={props.img} />
      </div>
    </div>
  ));

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section>
      <div onClick={handleShow} style={props.thumbsContainer}>
        {thumbs}
        {props.message}
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Body>
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
        </Modal.Body>
      </Modal>
    </section>
  );
}
export default Dropbox;
