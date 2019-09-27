import React from "react";
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  .navbar-brand,
  .navbar-nav,
  .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

export const Navbar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Hello</Navbar.Brand>
    </Navbar>
  </Styles>
);
