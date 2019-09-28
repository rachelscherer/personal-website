import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { CV } from "./CV";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { NoMatch } from "./NoMatch";
import { Layout } from "./components/Layout";
import styled from "styled-components";

const Styles = styled.div`
  div {
    text-align:center;
  }

  .intro {
    margin-top:200px;
    text-align: center;
  }

  .nav{
    width: 100%;
    margin-top:-20px
    justify-content: center;
  }

  .nav_text{
    width: 100%
    justify-content: space-around;
    padding: 1rem;
  }
  
  .nav_text h1{
    font-size: 1.5rem;
  }

  .nav_text h1:hover {
    color: blue;
    cursor: pointer;
  }

  .scrolled{
    position:fixed;
    background-color: gray;
    margin-top: -271px;
  }
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 280;
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
      <React.Fragment>
        <Styles>
          <h2 className="intro">hi, i'm rachel</h2>
          <hr />
          <div className={this.state.scrolled ? "nav scrolled" : "nav"}>
            <div className="nav_text">
              <h1>yay, i did it</h1>
            </div>
          </div>
        </Styles>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/cv" component={CV} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
