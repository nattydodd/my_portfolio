import React, { Component } from 'react';
import { connect } from 'react-redux';

class WebsiteDetail extends Component {
  render() {

    if (!this.props.website) {
      return <div>Select a Website</div>
    }
    
    return (
      <div>
        <h3>Details for:</h3>
        <div>{this.props.website.title}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    website: state.activeWebsite
  };
}

export default connect(mapStateToProps)(WebsiteDetail);
