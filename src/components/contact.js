import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Contact extends Component {

    render() {
      return (
        <div className="contact-details">
          <h4>Please get in touch! :)</h4>
          <p>nataliedodd89@gmail.com</p>
          <p><a className="text-link" href="https://dl.dropboxusercontent.com/u/80500150/NatalieDodd_WebDevelopment_CV.pdf" target="_blank">Resume</a></p>
          <p><a className="text-link" href="https://github.com/nattydodd" target="_blank">Github</a></p>
          <p><a className="text-link" href="https://www.linkedin.com/in/nataliedodd89/" target="_blank">LinkedIn</a></p>
        </div>
      );
    }
}
