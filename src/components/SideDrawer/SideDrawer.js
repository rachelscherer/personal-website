import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <router>
      <nav className={drawerClasses}>
        <ul>
          <li>
            <Link to="/">CV</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Projects</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </router>
  );
};

export default sideDrawer;
