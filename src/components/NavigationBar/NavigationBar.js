import React, { Component } from "react";
import { Link } from "react-scroll";
import "./NavigationBar.css";
import DrawerButton from "../SideDrawer/DrawerButton";

class NavigationBar extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 196;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  render() {
    return (
      <div>
        <div className={this.state.scrolled ? "nav scrolled" : "nav"}>
          <div className="nav_text">
            <hr className="top" />
            <DrawerButton click={this.props.drawerClickHandler} />
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-55}
              duration={1000}
            >
              <div className="navLink">About</div>
            </Link>
            <Link
              activeClass="active"
              to="cv"
              spy={true}
              smooth={true}
              offset={-55}
              duration={1000}
            >
              <div className="navLink">Resume</div>
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-55}
              duration={1000}
            >
              <div className="navLink">Projects</div>
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              <div className="navLink">Contact</div>
            </Link>
            <hr className="bottom" />
          </div>
        </div>
        <div className={this.state.scrolled ? "spacer" : "nospacer"}>
          &nbsp;
        </div>
        <div className="title">
          <h3>Hi, I'm Rachel.</h3>
        </div>
      </div>
    );
  }
}

export default NavigationBar;
