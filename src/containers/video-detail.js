import React, { Component } from 'react';
import { connect } from 'react-redux';

class VideoDetail extends Component {
  render() {

      if (!this.props.video) {
        return <div className="col-sm-6">Select a Video</div>
      }

      return (
        <div className="col-sm-6">
          <h3>Details for:</h3>
          <div>{this.props.video.title}</div>
        </div>
      );

  }
}

function mapStateToProps(state) {
  return {
    video: state.activeVideo
  };
}

export default connect(mapStateToProps)(VideoDetail);
