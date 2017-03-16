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
              <h4>Full-Stack Web Developer</h4>
              -<br />
              <p>After 4 years of serving dry frozen meals at 40,000 feet, I decided to learn how to code. During my career progression from Flight Attendant to Web Developer I discovered one universal truth: No matter how far you explore- there is always more to learn. </p>
              <p>I also do graphic design work and produce video content. Check it out <a href="http://www.ndodd.weebly.com/portfolio" target="_blank"><u>here</u></a>!</p>
              <img className="animated fadeInDown" src="http://i.imgur.com/InHscVn.png" />
            </div>
          </div>

        </div>

        <div className="col-xs-4 col-xs-offset-3 main-icons">
          <div className="main-icon">
            <i className="fa fa-long-arrow-right animated fadeInLeft" aria-hidden="true"></i>
            <a href="http://www.linkedin.com/in/nataliedodd89" target="_blank"><img src="http://i.imgur.com/BjrKE7i.png" /></a>
            <p className="icon-link-text">/in/nataliedodd89</p>
          </div>
          <div className="main-icon">
            <i className="fa fa-long-arrow-right animated fadeInLeft" aria-hidden="true"></i>
            <a href="mailto:nataliedodd89@gmail.com"><img src="http://i.imgur.com/2FQxC2y.png" /></a>
            <p className="icon-link-text">nataliedodd89@gmail.com</p>
          </div>
          <div className="main-icon">
            <i className="fa fa-long-arrow-right animated fadeInLeft" aria-hidden="true"></i>
            <a href="http://www.github.com/nattydodd" target="_blank"><img src="http://i.imgur.com/StmSUUk.png" /></a>
            <p className="icon-link-text">/nattydodd</p>
          </div>
          <div className="main-icon">
            <i className="fa fa-long-arrow-right animated fadeInLeft" aria-hidden="true"></i>
            <a href="http://www.nattycodes.com" target="_blank"><img src="http://i.imgur.com/7F1bRiI.png" /></a>
            <p className="icon-link-text">nattycodes.com</p>
          </div>
        </div>
      </div>
    );
  }

}
