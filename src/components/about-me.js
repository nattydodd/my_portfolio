import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class AboutMe extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-xs-4 col-xs-offset-1 about-me">
          <h1>Natalie Dodd</h1>

          <div className="row">
            <div className="about-me-text">
              <h4>Full-Stack Web Developer,<br />
              Graphic Designer & Video Editor.<br /></h4>
              -<br />
              <p>After 4 years of serving dry frozen meals at 40,000 feet, I decided to learn how to code.<br />
              I think I will keep my feet on the ground for a while ;)
              </p>
              <img className="animated fadeInDown" src="http://i.imgur.com/InHscVn.png" />
            </div>
          </div>

        </div>

        <div className="col-xs-4 col-xs-offset-3 main-icons">
          <div className="main-icon">
            <a href="http://www.linkedin.com/in/nataliedodd89" target="_blank"><img src="http://i.imgur.com/BjrKE7i.png" /></a>
          </div>
          <div className="main-icon">
            <a href="mailto:nataliedodd89@gmail.com"><img src="http://i.imgur.com/2FQxC2y.png" /></a>
          </div>
          <div className="main-icon">
            <a href="http://www.github.com/nattydodd" target="_blank"><img src="http://i.imgur.com/StmSUUk.png" /></a>
          </div>
          <div className="main-icon">
            <a href="http://www.nattycodes.com" target="_blank"><img src="http://i.imgur.com/7F1bRiI.png" /></a>
          </div>
        </div>
      </div>
    );
  }

}
