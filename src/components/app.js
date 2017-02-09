import React, { Component } from 'react';

import WebsiteList from '../containers/website-list';
import WebsiteDetail from '../containers/website-detail';
import VideoList from '../containers/video-list';
import VideoDetail from '../containers/video-detail';


export default class App extends Component {
  render() {
    return (
      <div className="container">
        <section>
          <div className="row">
            <WebsiteList />
            <WebsiteDetail />
          </div>
        </section>
        <section>
          <div className="row">
            <VideoList />
            <VideoDetail />
          </div>
        </section>
      </div>
    );
  }
}
