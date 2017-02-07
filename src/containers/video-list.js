import React, { Component } from 'react';
import { connect } from 'react-redux';

class VideoList extends Component {
  renderList() {
    return this.props.videos.map((video) => {
      return (
        <li key={video.title} className="list-group-item">{video.title}</li>
      );
    });
  }

    render() {
      return (
        <div className="col-sm-6">
          <ul className="list-group">
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

export default connect(mapStateToProps)(VideoList)
// this connects the function and the component and exports a container
