import React, { Component } from 'react';
import { connect } from 'react-redux';

class VideoDetail extends Component {
  render() {

      if (!this.props.video) {
        return (
          <div className="col-sm-6 television">
            <h3 className="select-a-video">Please Select a Video</h3>
          </div>
        );
      }

      return (

          <div className="col-sm-6 television">
            <iframe width="630" height="355" src={this.props.video.source} frameborder="0" allowfullscreen></iframe>
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
