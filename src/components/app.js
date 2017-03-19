import React, { Component } from 'react';

import WebsiteList from '../containers/website-list';
import WebsiteDetail from '../containers/website-detail';
import FullpageReact from '../containers/full-page-react';
import AboutMe from './about-me';
import Contact from './contact';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid page-wrapper">
        <img id="njd_logo" src="http://i.imgur.com/5I894FI.png" alt="logo"/>
        <FullpageReact />
      </div>
    );
  }
}
