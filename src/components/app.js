import React, { Component } from 'react';

import WebsiteList from '../containers/website-list';
import WebsiteDetail from '../containers/website-detail';
import VideoList from '../containers/video-list';
import VideoDetail from '../containers/video-detail';
import FullpageReact from '../containers/full-page-react';
import AboutMe from './about-me';
import VideosText from './videos-text';
import DesignList from '../containers/design-list';
import Contact from './contact';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid page-wrapper">
      <img id="njd_logo" src="http://i.imgur.com/5I894FI.png" alt="logo"/>
        <FullpageReact />
        <section>
          <div className="row website">
            <WebsiteDetail />
            <WebsiteList />
          </div>
        </section>
        <section>
          <DesignList />
        </section>
        <section>
          <div className="row video">
            <VideoList />
            <VideoDetail />
          </div>
          <div className="row video-text">
            <VideosText />
          </div>
        </section>
        <section>
          <div className="row">
            <Contact />
          </div>
        </section>
      </div>
    );
  }
}
