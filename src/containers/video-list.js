import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectVideo } from '../actions/index';
import { bindActionCreators } from 'redux';

class VideoList extends Component {
  renderList() {
    return this.props.videos.map((video) => {
      return (
        <li
          key={video.title}
          onClick={() => this.props.selectVideo(video)}
          className="video-list-item">
          {video.title}
        </li>
      );
    });
  }

    render() {
      return (
        <div className="col-sm-5">
          <ul>
            {this.renderList()}
          </ul>
        </div>
      )
    }

  }

function mapStateToProps(state) {
  // whatever is returned will show up as props inside of WebsiteList
  return {
    videos: state.videos
  };
}

// Anything returned from this function will end up as props on the WebsiteList container
function mapDispatchToProps(dispatch) {
  //whenever selectWebsite is called, the result should be passed to all reducers
  return bindActionCreators({ selectVideo: selectVideo }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList)
// this connects the function and the component and exports a container
