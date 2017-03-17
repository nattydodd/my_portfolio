import React, { Component } from 'react';

export default class Muskoka extends Component {
  render() {
    return (
      <div>
        <div className="movie-box">
          <iframe width="100%" height="330" src="https://www.youtube.com/embed/6qz3CsQBoA8?autoplay=1&loop=1&playlist=6qz3CsQBoA8" frameBorder="0" allowFullScreen></iframe>
        </div>
        <div className="col-xs-11 col-md-7 description">
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
          <h1>Show Us Your Canada</h1>
          <p>Show Us Your Canada is an online contest and marketing strategy to promote tourism in the Muskoka Region of Canada. It target expats living abroad, and allows them to upload photos and stories depicting their favourite Muskoka memories. I created this app using Rails and JQuery to allow the users to add Instagram-like filters to their submissions. Users can vote, and each vote is verified using an email verification system as well validated by unique IP address. Submissions are also shareable via Instagram and Twitter.</p>
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
