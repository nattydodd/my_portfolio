import React, { Component } from 'react';

export default class Muskoka extends Component {
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
          <h1>Show Us Your Canada</h1>
          <p>Show Us Your Canada is an online contest and marketing strategy to promote tourism in the Muskoka Region of Canada. It target expats living abroad, and allows them to upload photos and stories depicting their favourite Muskoka memories. I created this app using Rails and JQuery to allow the users to add Instagram-like filters to their submissions. Users can vote, and each vote is verified using an email verification system as well validated by unique IP address. Submissions are also shareable via Instagram and Twitter.</p>
          <button className="btn padded">
            <a href="https://muskoka-contest.herokuapp.com/" target="_blank">
            View Live Site
            </a>
          </button>
        </div>
      </div>
    )
  }
}
