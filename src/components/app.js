import React, { Component } from 'react';
import WebsiteList from '../containers/website-list';
import VideoList from '../containers/video-list';

export default class App extends Component {
  render() {
    return (
        <div>
          <WebsiteList />
          <VideoList />
        </div>
    );
  }
}
