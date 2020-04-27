import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-scroll";
import "./About.css";
import rachel from "./../assets/rachel.png";

export const About = () => (
  <div id="about" className="aboutbg">
    <Container>
      <br />
      <img src={rachel} alt="" className="aboutimg" />
      <p>
        After graduating with a B.A. in Music from the Florida State University
        in 2017, I decided to learn to code. Now, I am a web developer, master's
        student in computer science at Georgia Tech, and I.T. professional based
        in Riverside, California.{" "}
      </p>
      <p>
        I began my journey with programming at the age of 10 when I used to
        create and program Flash games using Macromedia Flash MX 2004 and
        ActionScript 2.0. I was always drawn to the creativity in planning,
        designing, drawing, and animating these games as well as the
        satisfaction in programming them to bring it all together.
      </p>
      <p>
        My creative itch naturally extended into a passion for music, which led
        me to pursue a B.A. in Music at FSU. I developed many valuable skills
        there, but I really missed programming. After taking a few CS classes as
        electives, I made the decision to pursue programming after graduation. I
        believe that the right combination of creativity and analytical
        reasoning skills serve as a catalyst for innovation.
      </p>
      <p>
        My specialty right now is writing elegant frontend and backend code
        using React.js, Express.js, and Node.js,{" "}
        <Link
          activeClass="active"
          to="cv"
          spy={true}
          smooth={true}
          offset={-55}
          duration={1000}
        >
          <div className="aboutNavLink">
            but I also have experience in many other areas in CS.
          </div>
        </Link>{" "}
        As a student, I am always eager to learn more.
      </p>
      <p>
        While I'm not in class, at work, or{" "}
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-55}
          duration={1000}
        >
          <div className="aboutNavLink">working on my personal projects</div>
        </Link>
        , you can probably find me skiing at Mammoth Mountain, hiking in one of
        the many fantastic trails in SoCal, or making music with friends.
      </p>
      <br />
    </Container>
  </div>
);
