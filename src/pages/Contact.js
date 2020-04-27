import React from "react";
import Container from "react-bootstrap/Container";
import "./Contact.css";

export const Contact = () => (
  <div id="contact" className="contactbg">
    <Container>
      <br />
      <h1>Contact</h1>
      <hr class="contacthr" />
      <div className="icon">
        <a
          href="https://www.linkedin.com/in/rachelscherer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin"></i>{" "}
          https://www.linkedin.com/in/rachelscherer/
        </a>
      </div>
      <br />
      <div className="icon">
        <a href="mailto:rjscherer@cpp.edu">
          <i class="material-icons">email</i> rjscherer@cpp.edu
        </a>
      </div>
      <br />
      <hr class="contacthr" />
    </Container>
    <br />
    <br />
    <br />
    <br />
  </div>
);
