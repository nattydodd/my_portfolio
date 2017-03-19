import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class AboutMe extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-xs-10 col-sm-6 col-md-6 col-xs-offset-1 about-me">
          <h1>Natalie Dodd</h1>

          <div className="row">
            <div className="about-me-text">
              <h4>Full-Stack Web Developer</h4>

              <p>After 4 years of serving dry frozen meals at 40,000 feet, I decided to learn how to code. During my career progression from Flight Attendant to Web Developer I discovered one universal truth: No matter how far you explore- there is always more to learn.<br /><br />
              I specialize in building web applications using Ruby on Rails, HTML5, CSS3 & Javascript, but lately I have been dabbling in (and loving) React and Redux.</p>

              <h4 className="graphic-designer">Graphic Designer & Video Editor</h4>
              <span className="portfolio-external"><i className="fa fa-external-link-square" aria-hidden="true"></i><a href="http://ndodd.weebly.com" target="_blank">Portfolio</a></span>
              <p>I have a background in graphic design and video editing and love incorporating these skills in my current projects.</p>

              <img className="animated fadeInDown" src="http://i.imgur.com/InHscVn.png" />
            </div>
          </div>

        </div>

        <div className="col-xs-10 col-sm-3 col-xs-offset-1 col-md-3 col-md-offset-1 main-icons">
          <div className="main-icon">
            <i className="fa fa-long-arrow-right animated fadeInLeft" aria-hidden="true"></i>
            <a href="http://www.linkedin.com/in/nataliedodd89" target="_blank"><img src="http://i.imgur.com/BjrKE7i.png" /></a>
            <p className="icon-link-text">linkedin.com/in/nataliedodd89</p>
          </div>
          <div className="main-icon">
            <i className="fa fa-long-arrow-right animated fadeInLeft" aria-hidden="true"></i>
            <a href="mailto:nataliedodd89@gmail.com"><img src="http://i.imgur.com/2FQxC2y.png" /></a>
            <p className="icon-link-text">nataliedodd89@gmail.com</p>
          </div>
          <div className="main-icon">
            <i className="fa fa-long-arrow-right animated fadeInLeft" aria-hidden="true"></i>
            <a href="http://www.github.com/nattydodd" target="_blank"><img src="http://i.imgur.com/StmSUUk.png" /></a>
            <p className="icon-link-text">github.com/nattydodd</p>
          </div>
          <div className="main-icon">
            <i className="fa fa-long-arrow-right animated fadeInLeft" aria-hidden="true"></i>
            <a href="http://www.nattycodes.com" target="_blank"><img src="http://i.imgur.com/7F1bRiI.png" /></a>
            <p className="icon-link-text">www.nattycodes.com</p>
          </div>
        </div>
      </div>
    );
  }

}
