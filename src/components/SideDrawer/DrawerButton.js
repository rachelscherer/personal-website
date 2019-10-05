import React from "react";
import "./DrawerButton.css";

const DrawerButton = props => (
  <button className="box" onClick={props.click}>
    <div className="line" />
    <div className="line" />
    <div className="line" />
  </button>
);

export default DrawerButton;
