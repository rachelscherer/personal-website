import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./CV.css";

export const CV = () => (
  <div id="cv" className="cvbg">
    <Container>
      <br />
      <h1>CV</h1>
      <h5>
        You can download my full CV{" "}
        <a href="/" target="_blank">
          here.
        </a>
      </h5>
      <br />
      <hr />
      <br />
      <Row>
        <Col sm="3">
          <h5>Education</h5>
          <br />
          <br />
        </Col>
        <Col className="cvbod">
          <b>California State Polytechnic University, Pomona</b>
          <br />
          Supplemental Education in Computer Science, 2019 - present
          <br />
          GPA: TBD
          <br />
          <br />
          <b>Riverside City College</b> <br />
          Supplemental Education in Computer Science, 2018 - 2019
          <br />
          GPA: 4.00
          <br />
          <br />
          <b>Florida State University</b>
          <br />
          B.A., Music, 2014 - 2017
          <br />
          GPA: 3.19
        </Col>
      </Row>
      <br />
      <hr />
      <br />
      <Row>
        <Col sm="3">
          <h5>Technical Skills</h5>
          <br />
          <br />
        </Col>
        <Col className="cvbod">
          <b>Most Experienced</b>
          <br />
          C++, JavaScript, HTML/CSS, React, Windows 7, 8.1, 10, Linux, Bash,
          Active Directory, Basic Networking and Servers, LaTeX
          <br />
          <br />
          <b>Some Familiarity</b>
          <br />
          PHP, MySQL, VBA, JQuery, PowerShell
        </Col>
      </Row>
      <br />
      <hr />
      <br />
      <Row>
        <Col sm="3">
          <h5>Related Work Experience</h5>
          <br />
          <br />
        </Col>
        <Col className="cvbod">
          <b>PC Support Specialist, Cal Poly Pomona Foundation</b>
          <br />
          Pomona, CA, May 2019 - present
          <br />
          <ul>
            <li>
              Provide support via telephone, face to face and remote desktop
              communication with end-users utilizing customer service techniques
              and strong communication skills.
            </li>
            <li>
              Provide workstation, printer, point-of-sale and peripheral
              support.
            </li>
            <li>Manage, distribute and deploy Windows updates using WSUS.</li>
            <li>Deploy images for Windows 10 machines through MDT/WDS.</li>
            <li>Manage user accounts via Active Directory.</li>
            <li>Configure and maintain Micros POS systems.</li>
            <li>
              Utilize the Windows Print Server to add, remove, and update
              network printers.
            </li>
            <li>
              Promptly log and update status and progress of projects in
              Track-It! support ticketing system.
            </li>
            <li>
              Provide technical training on hardware and software for new and
              existing users.
            </li>
            <li>
              Lead documentation efforts to ensure ease of access to critical
              information.
            </li>
            <li>Prioritize and escalate issues where required.</li>
          </ul>
          <br />
          <b>Business Administrator, LEGACY Supply Chain Services</b>
          <br />
          Jurupa Valley, CA, October 2017 - July 2018
          <br />
          <ul>
            <li>
              Served as the point of contact during server outages and firmware
              upgrades.
            </li>
            <li>
              Controlled user accounts and granted elevated access to protected
              resources in RACF.
            </li>
            <li>
              Automated and improved workflow by integrating Visual Basic macros
              into daily reporting.
            </li>
            <li>
              Inducted printers, terminals, voice consoles, and scan guns onto
              the wireless network.
            </li>
            <li>
              Troubleshooted and resolved printer, network, and computer issues.
            </li>
            <li>
              Planned shipments by working closely with customers (internal and
              external), transportation, and area distribution centers.
            </li>
            <li>Resolved issues via email or telephone.</li>
            <li>Served as the point of contact for shipment issues.</li>
          </ul>
        </Col>
      </Row>
    </Container>
    <br />
  </div>
);
