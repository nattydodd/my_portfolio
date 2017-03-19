import React, { Component } from 'react';

export default class RoadMap extends Component {
  render() {
    return (
      <div>
        <div className="movie-box">
          <img src="http://i.imgur.com/6ArKhSx.gif" />
        </div>
        <div className="col-xs-11 col-sm-7 col-md-8 description-road">
          <div className="stack-box">
            <span className="stack-half-road">
              <h5>
                <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>Ruby<br />
                <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>Rails<br />
                <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>Javascript<br />
              </h5>
            </span>
            <span className="stack-half-road">
              <h5>
                <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>jQuery<br />
                <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>Accessibility<br />
                <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>Nationbuilder
              </h5>
            </span>
          </div>
          <h1>Road Closure Generator</h1>
          <p>I created a Road Closure Generator using Rails, JQuery and the Google Maps API for a client called BlackBird, which deals with road closures in the Durham Region of Ontario. Prior to the creation of this app, the company had to manually photoshop lines on a map to show the closures. However, now they are able to click on a map and save the coordinates, which generates a line automatically. The Blackbird website, which I also designed and built using Nationbuilder, is fully accessible in accordance to the Accessibility for Ontarians with Disabilities Act.</p>
          <button className="btn padded">
            <a href="http://www.407eastphase2.ca/" target="_blank">
            View Live Site
            </a>
          </button>
        </div>
      </div>
    )
  }
}
