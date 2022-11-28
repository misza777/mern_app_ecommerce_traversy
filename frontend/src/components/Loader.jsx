import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
      animation="grow"
      variant="warning"
      role="status"
      style={{
        width: "100px",
        height: "100px",
        margin: " 0 auto",
        display: "block",
      }}
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default Loader;
