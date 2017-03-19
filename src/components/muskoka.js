import React, { Component } from 'react';

export default class Muskoka extends Component {
  render() {
    return (
      <div>
        <div className="movie-box">
          <img src="http://i.imgur.com/E8O2Jpv.gif" />
        </div>
        <div className="col-xs-11 col-sm-7 col-md-8 description">
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
          <h1>Share Your Canada</h1>
          <p>Share Your Canada is an online contest and marketing strategy to promote tourism in the Muskoka Region of Canada. It target expats living abroad, and allows them to upload photos and stories depicting their favourite Muskoka memories. I created this app using Rails and JQuery to allow the users to add Instagram-like filters to their submissions. Users can vote, and each vote is verified using an email verification system as well validated by unique IP address. Submissions are also shareable via Instagram and Twitter.</p>
          <button className="btn padded">
            <a href="http://shareyourcanada150.ca/" target="_blank">
            View Live Site
            </a>
          </button>
        </div>
      </div>
    )
  }
}
