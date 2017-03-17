import React, { Component } from 'react';

export default class HumanNetwork extends Component {
  render() {
    return (
      <div>
        <div className="movie-box">
          <iframe width="100%" height="330" src="https://www.youtube.com/embed/QLyprueG8AI?autoplay=1&loop=1&playlist=QLyprueG8AI" frameBorder="0" allowFullScreen></iframe>
        </div>
        <div className="col-xs-11 col-md-7 description">
          <div className="stack-box">
          <span className="stack-half">
            <h5>
              <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>Javascript<br />
              <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>jQuery<br />
              <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>HTML5<br />
            </h5>
          </span>
          <span className="stack-half">
            <h5>
              <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>CSS3
            </h5>
          </span>
          </div>
          <h1>The Human Network</h1>
          <p>I took on a front-end freelance project for a Start-Up company directly upon graduating Bitmaker to improve my speed and skill with CSS and Javascript. Working with one other team member, we created a mock website for a political social networking website. We met with the client, assisted with creative direction and built a product that could be used to pitch the idea to investors for further funding.</p>
          <button className="btn padded">
            <a href="http://www.thehumannetwork.ca" target="_blank">
            View Live Site
            </a>
          </button>
        </div>
      </div>
    )
  }
}
