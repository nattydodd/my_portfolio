import React, { Component } from 'react';
import { connect } from 'react-redux';
import AboutMe from '../components/about-me';

const {Fullpage, Slide, TopNav, SideNav} = require('fullpage-react');

let topNavOptions = {
  footer: false, //topNav can double as a footer if true
  align: 'center', //also supports center and right alignment

  //styles to apply to children
  activeStyles: {backgroundColor: 'white'},
  hoverStyles: {backgroundColor: 'yellow'},
  nonActiveStyles: {backgroundColor: 'gray'}
};

let sideNavOptions = {
  right: '2%', //left alignment is default
  top: '50%', //top is 50% by default

  //styles to apply to children
  activeStyles: {color: 'white'},
  hoverStyles: {color: 'yellow'},
  nonActiveStyles: {color: 'gray'}
};

class FullpageReact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {active: 0};

    this.updateActiveState = this.updateActiveState.bind(this);
  }

  updateActiveState(newActive) {
    this.setState({'active': newActive});
  }

  shouldComponentUpdate(nP, nS) {
    //ensure hoverStyles and activeStyles update
    return nS.active != this.state.active;
  }

  onMouseOver(idx) {
    this.setState({'hover': idx});
  }

  onMouseOut(e) {
    this.setState({'hover': null});
  }

  compareStyles(component, idx) {
    return idx == this.state.active ? component.activeStyles : idx == this.state.hover ? component.hoverStyles : component.nonActiveStyles
  }

  render() {
    let navCount = 5;
    // let navArr = [];
    let navArr = ["About Me", "Web", "Design", "Video", "Contact"];
    // for (let i = 0; i < navCount; i++) {
    //   navArr.push(i);
    // }

    return (
      <Fullpage active={this.updateActiveState}>

        <TopNav {...topNavOptions}>
          {navArr.map((n, idx) => {
            return <span key={idx} ref={idx} className="topnav-items">{navArr[idx]}</span>
          }, this)}
        </TopNav>

        <Slide style={{backgroundColor: '#FF574F'}}>
          <AboutMe />
        </Slide>
        <Slide style={{backgroundColor: 'rgb(242, 148, 132)'}}></Slide>
        <Slide style={{backgroundColor: '#ABE28D'}}></Slide>
        <Slide style={{backgroundColor: '#c5f2ff'}}></Slide>
        <Slide style={{backgroundColor: '#2B2C28'}}></Slide>

        <SideNav {...sideNavOptions}>
          {navArr.map((n, idx) => {
            return <div key={idx} ref={idx}>&#x25CF;</div>
          }, this)}
        </SideNav>

      </Fullpage>
    );
  }
};

module.exports = FullpageReact;
