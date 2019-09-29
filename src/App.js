import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { CV } from "./CV";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Layout } from "./components/Layout";
import NavigationBar from "./components/NavigationBar";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <React.Fragment>
          <NavigationBar />
          <Layout>
            <Home />
            <About />
            <CV />
            <Projects />
            <Contact />
          </Layout>
        </React.Fragment>
      </HashRouter>
    );
  }
}

export default App;
