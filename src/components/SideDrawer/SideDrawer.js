import React from "react";
import { Link } from "react-scroll";
import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <router>
      <nav className={drawerClasses}>
        <div className="sideSpacer" />
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-140}
          duration={1000}
        >
          <div className="sideNavLink">About</div>
        </Link>
        <Link
          activeClass="active"
          to="cv"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          <div className="sideNavLink">CV</div>
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          <div className="sideNavLink">Projects</div>
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          <div className="sideNavLink">Contact</div>
        </Link>
      </nav>
    </router>
  );
};

export default sideDrawer;
