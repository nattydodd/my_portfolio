import React, { Component } from 'react';


export default class PackApp extends Component {
  render() {
    return (
      <div>
        <div className="movie-box">
          <img src="http://i.imgur.com/ZWMYSUE.gif" />
        </div>

        <div className="col-xs-11 col-sm-7 col-md-8 col-lg-7 description">
        <div className="stack-box">
          <span className="stack-half">
            <h5>
              <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>Ruby<br />
              <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>Rails<br />
              <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>Javascript<br />
            </h5>
          </span>
          <span className="stack-half">
            <h5>
              <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>jQuery<br />
              <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>HTML5<br />
              <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>CSS3
            </h5>
          </span>
        </div>
          <h1>PackApp</h1>
          <p>While studying at Bitmaker, we had the challenge of breaking into groups of 4, and building something with a 2 week deadline. My group chose to create a fun app which helps you to visualize your wardrobe and pack for a holiday. It includes an outfit checker which allows you to mix and match clothing items, as well as a drag and drop feature created with JQuery UI where the user can drag items and save them into their suitcase. We also integrated a weather API to show the weather of your destination, to add to the virtual packing experience.</p>
          <button className="btn padded">
            <a href="http://pack-app.herokuapp.com" target="_blank">
            View Live Site
            </a>
          </button>

        </div>
      </div>
    )
  }
}
