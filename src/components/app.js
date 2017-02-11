import React, { Component } from 'react';

import WebsiteList from '../containers/website-list';
import WebsiteDetail from '../containers/website-detail';
import VideoList from '../containers/video-list';
import VideoDetail from '../containers/video-detail';
import FullpageReact from '../containers/full-page-react';
import AboutMe from './about-me';


export default class App extends Component {
  render() {
    return (
      <div className="container-fluid page-wrapper">
        <FullpageReact />
        <section>
          <div className="row website">
            <WebsiteDetail />
            <WebsiteList />
          </div>
        </section>
        <section>
        </section>
        <section>
          <div className="row video">
            <VideoList />
            <VideoDetail />
          </div>
        </section>
      </div>
    );
  }
}
