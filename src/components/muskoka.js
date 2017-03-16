import React, { Component } from 'react';

export default class Muskoka extends Component {
  render() {
    return (
      <div>
        <div className="movie-box">
        </div>
        <div className="col-xs-7 description">
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
