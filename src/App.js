import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { About } from "./pages/About";
import { CV } from "./pages/CV";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Layout } from "./components/Layout";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div>
        <Router>
          <NavigationBar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <Layout>
            <About />
            <CV />
            <Projects />
            <Contact />
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
