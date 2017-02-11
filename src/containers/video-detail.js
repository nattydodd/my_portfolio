import React, { Component } from 'react';
import { connect } from 'react-redux';

class VideoDetail extends Component {
  render() {

      if (!this.props.video) {
        return <div className="col-sm-6">Select a Video</div>
      }

      return (
        <div className="col-sm-6">
          <iframe width="560" height="315" src={this.props.video.source} frameborder="0" allowfullscreen></iframe>
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
