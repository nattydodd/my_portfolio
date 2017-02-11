import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class AboutMe extends Component {

  render() {
    return (
      <div className="col-centered about-me">
        <h1>Natalie Dodd</h1>
        <img className="animated fadeInDown" src="https://dl.dropboxusercontent.com/u/80500150/round1.png" />
        <div className="row">
          <div className="col-sm-3 about-me-text">
            <p>Full-Stack Web Developer,<br />
            Graphic Designer & Video Editor.<br />
            -<br />
            After 4 years of serving dry frozen meals at 40,000 feet, I decided to learn how to code.<br /><br />
            </p>
          </div>
        </div>
        <img id="ruby" className="skills animated fadeInDown" src="https://dl.dropboxusercontent.com/u/80500150/resume_icons-01.png" />
        <img id="premiere" className="skills animated fadeInDown" src="https://dl.dropboxusercontent.com/u/80500150/resume_icons-02.png" />
        <img id="indesign" className="skills animated fadeInDown" src="https://dl.dropboxusercontent.com/u/80500150/resume_icons-03.png" />
        <img id="css" className="skills animated fadeInDown" src="https://dl.dropboxusercontent.com/u/80500150/resume_icons-07.png" />
        <img id="illustrator" className="skills animated fadeInDown" src="https://dl.dropboxusercontent.com/u/80500150/resume_icons-05.png" />
        <img id="photoshop" className="skills animated fadeInDown" src="https://dl.dropboxusercontent.com/u/80500150/resume_icons-04.png" />
        <img id="javascript" className="skills animated fadeInDown" src="https://dl.dropboxusercontent.com/u/80500150/javascript-pink2.png" />
        <img id="html" className="skills animated fadeInDown" src="https://dl.dropboxusercontent.com/u/80500150/resume_icons-09.png" />
        <img id="aftereffects" className="skills animated fadeInDown" src="https://dl.dropboxusercontent.com/u/80500150/resume_icons-06.png" />
        <img id="postgres" className="skills animated fadeInDown" src="https://dl.dropboxusercontent.com/u/80500150/postgresql-pink2.png" />
        <img id="react" className="skills animated fadeInDown" src="https://dl.dropboxusercontent.com/u/80500150/react-pink.png" />
      </div>
    );
  }

}
