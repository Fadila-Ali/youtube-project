import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="content">
        <div className="me">
          <h3>About Me</h3>
          <div class="profile"></div>
          <div class="bio">
            <h3>
              Hey, My name is Fadila Ali. I am currently a
              <a href="https://www.pursuit.org/"> Pursuit</a> fellow, learning
              full-stack web development. My goal is to learn and build the
              necessary skills that will allow me to create my imagination in
              the form of software.
            </h3>
          </div>
          <div class="contact">
            <p>
              Contact Me <span>&#9786;</span>
              <br />
              <br />
              <a href="https://github.com/">github</a>
              <a href="https://www.linkedin.com/in/fadila-ali-574b13183/">
                linkedin
              </a>
              <a href="mailto: fadilaali@pursuit.org">email</a>
            </p>
          </div>
        </div>
        <div className="project">
          <h3>About this project</h3>
          <h4>
            This app was a clone of YouTube Home Page and Search Page built with
            React. Typing a word and clicking on the search icon does a real
            search on the YouTube API. 20 results are displayed when a search is
            made. The purpose of this project was to improve my react knowledge.
            I not only did that, but learnt so much more!
          </h4>
        </div>
      </div>
    </div>
  );
};

export default About;
