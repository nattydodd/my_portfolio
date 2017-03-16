import React, { Component } from 'react';

export default class RipeFind extends Component {
  render() {
    return (
      <div>
        <div className="movie-box">
        </div>
        <div className="col-xs-7 description">
          <div className="stack-box">
            <h5>
              <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>React.js<br />
              <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>Redux<br />
              <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>Docker<br />
              <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>Python<br />
              <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>ES6<br />
              <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>HTML5<br />
              <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>CSS3
            </h5>
          </div>
          <h1>Ripe Find</h1>
          <p>With the support of an experienced back-end developer, I am currently building the front-end of a complex API which helps literary agents source intellectual property, using React.js and Redux. The front-end is written in ES6 and the back end is in Python. This project has sparked my new love for React and my decision to rebuild this portfolio using React!</p>
          <h5><em>*This website is still in production</em></h5>
        </div>
      </div>
    )
  }
}