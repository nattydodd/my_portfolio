import React, { Component } from 'react';

export default class RoadMap extends Component {
  render() {
    return (
      <div>
        <div className="movie-box">
        </div>
        <div className="col-xs-7 description">
          <div className="stack-box">
            <h5>
              <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>Ruby<br />
              <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>Rails<br />
              <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>Javascript<br />
              <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>jQuery<br />
              <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>HTML5<br />
              <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>CSS3
            </h5>
          </div>
          <h1>Road Closure Generator</h1>
          <p>I created a Road Closure Generator using Rails, JQuery and the Google Maps API for a client called BlackBird, which deals with road closures in the Durham Region of Ontario. Prior to the created of this app, the company had to manually photoshop lines on a map to show the closures. However, now they are able to click on a map and save the coordinates, which generates a line automatically.</p>
          <button className="btn padded">
            <a href="http://road-closure-generator.herokuapp.com" target="_blank">
            View Live Site
            </a>
          </button>
        </div>
      </div>
    )
  }
}
