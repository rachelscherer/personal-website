import React from "react";
import { Container } from "react-bootstrap";
import "./Projects.css";

export const Projects = () => (
  <div id="projects" className="projectsbg">
    <br />
    <h1>Projects</h1>
    <Container>
      <div className="projectcenter">
        <a
          href="https://github.com/Kode-Op/mealtime"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="item5">
            <div className="shade">
              <div className="itemheader">Mealtime</div>
              <br />
              <br />
              <br />
              <p>
                Food ordering and delivery web app. Created using React.js,
                Express.js, MongoDB, Node.js, and AWS.
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="projectcenter">
        <a
          href="https://github.com/rachelscherer/personal-website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="item1">
            <div className="shade">
              <div className="itemheader">Personal Website</div>
              <br />
              <br />
              <br />
              <p>
                Built with HTML, CSS, JavaScript, and the React library. This is
                the website that you're looking at right now!
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/rachelscherer/projects/tree/master/Chess"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="item2">
            <div className="shade">
              <div className="itemheader">Terminal Chess</div>
              <br />
              <br />
              <br />
              <p>
                Fully functional multiplayer chess game built in C++ using
                object-oriented programming principles.
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="projectcenter">
        <a
          href="https://github.com/rachelscherer/projects/tree/master/Uno"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="item3">
            <div className="shade">
              <div className="itemheader">Uno</div>
              <br />
              <br />
              <br />
              <p>Uno game built in C++, including computer-opponent logic.</p>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/rachelscherer/projects/tree/master/T9%20Predictive%20Text"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="item4">
            <div className="shade">
              <div className="itemheader">T9 Trie</div>
              <br />
              <br />
              <br />
              <p>Model for T9 predictive text technology.</p>
            </div>
          </div>
        </a>
        <h4>...with more to come!</h4>
      </div>
    </Container>
    <br />
  </div>
);
