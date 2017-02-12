import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectVideo } from '../actions/index';
import { bindActionCreators } from 'redux';

export default class DesignList extends Component {
  render() {
    return (
      <div className="row design">
        <h4 className="coming-soon">Coming Soon. Click <a className="text-link" href="http://ndodd.weebly.com/portfolio.html" target="_blank">here</a> to view some of my Graphic Design work</h4>
      </div>
    );
  }
}
